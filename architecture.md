# Architecture

## Overview

**Collab Drawing App** is a real-time collaborative drawing application where multiple users can join rooms and draw shapes (rectangles, circles, lines) together on a shared canvas. Changes are synchronized in real-time via WebSockets and persisted to a PostgreSQL database.

The project is a **pnpm monorepo** managed by **Turborepo**, split into three applications and several shared packages.

---

## Project Structure

```
├── apps/
│   ├── frontend/          # Next.js 15 web client
│   ├── http-backend/      # Express REST API (port 8080)
│   └── ws-backend/        # WebSocket server (port 8081)
├── packages/
│   ├── db/                # Prisma ORM client & schema (PostgreSQL)
│   ├── common/            # Shared types & Zod validation schemas
│   ├── backend-common/    # Shared backend config (JWT secret)
│   ├── ui/                # Shared UI components (Button, Card, Input, etc.)
│   ├── eslint-config/     # Shared ESLint configurations
│   └── typescript-config/ # Shared TypeScript configurations
```

---

## Tech Stack

| Layer       | Technology                                      |
| ----------- | ----------------------------------------------- |
| Frontend    | Next.js 15, React 19, Tailwind CSS, Framer Motion |
| Auth        | NextAuth.js (Credentials provider + JWT strategy) |
| HTTP API    | Express 5, bcrypt, jsonwebtoken                  |
| WebSocket   | `ws` library (native WebSocket server)           |
| Database    | PostgreSQL via Prisma ORM                        |
| Validation  | Zod (shared schemas in `@repo/common`)           |
| Monorepo    | pnpm workspaces + Turborepo                      |

---

## Applications

### 1. Frontend (`apps/frontend`)

A **Next.js 15** app with both server and client components.

**Key routes:**

| Route               | Description                                   |
| -------------------- | --------------------------------------------- |
| `/`                  | Landing page with animated hero section       |
| `/signin`, `/signup` | Authentication pages                          |
| `/create-room`       | Room creation form                            |
| `/canvas/[slug]`     | Collaborative canvas (server-fetched, protected) |

**Authentication flow:**
- NextAuth.js with a Credentials provider that calls the HTTP backend's `/signin` endpoint.
- JWT session strategy — the backend-issued JWT token is stored in the NextAuth session and passed to the WebSocket server for auth.
- Middleware (`middleware.ts`) protects `/canvas/*` routes, redirecting unauthenticated users to `/signin`.

**Canvas architecture (`draw/` module):**
- `CanvasApp` class — central controller that owns the HTML Canvas, handles mouse events, manages drawing tools, undo/redo history, shape state, and WebSocket communication.
- **Shape types:** Rectangle, Circle, Line (each with position, dimensions, and a unique ID).
- **Tools:** Pointer (pan), Rectangle, Circle, Line, Select (move shapes), Clear, Text (WIP).
- **Undo/Redo:** Maintains an undo/redo stack of `AppState` snapshots. Computes diffs (`DiffType`) between states and broadcasts them over WebSocket so other clients stay in sync.
- **Panning:** Camera offset system allows infinite canvas panning.
- **Real-time sync:** The `useSocket` hook connects to the WebSocket server with the user's JWT. Drawing, moving, undo/redo, and clear events are all broadcast to other users in the same room.

### 2. HTTP Backend (`apps/http-backend`)

An **Express** REST API running on port **8080**.

**Endpoints:**

| Method | Route                  | Auth | Description                    |
| ------ | ---------------------- | ---- | ------------------------------ |
| POST   | `/api/v1/signup`       | No   | Register a new user (bcrypt)   |
| POST   | `/api/v1/signin`       | No   | Login, returns JWT token       |
| POST   | `/api/v1/create-room`  | Yes  | Create a new drawing room      |
| GET    | `/api/v1/room/:slug`   | No   | Get room details by slug       |
| GET    | `/api/v1/shape/:roomId`| No   | Get existing shapes for a room |

**Auth middleware:** Verifies JWT tokens from the `Authorization` header using a shared secret (`@repo/backend-common`).

### 3. WebSocket Backend (`apps/ws-backend`)

A **`ws`** WebSocket server running on port **8081**.

**Connection flow:**
1. Client connects with `?token=<JWT>` query parameter.
2. Server verifies the JWT and registers the user in an in-memory `Users` array.
3. Client sends `join_room` to subscribe to a room's events.

**Message types:**

| Type         | Direction        | Description                              |
| ------------ | ---------------- | ---------------------------------------- |
| `join_room`  | Client → Server  | Subscribe to a room                      |
| `leave_room` | Client → Server  | Unsubscribe from a room                  |
| `draw`       | Bidirectional    | New shape created — broadcast & persist   |
| `move`       | Bidirectional    | Shape moved — broadcast & update DB       |
| `undo`       | Bidirectional    | Undo action — broadcast diff & sync DB    |
| `redo`       | Bidirectional    | Redo action — broadcast diff & sync DB    |
| `clear`      | Bidirectional    | Clear all shapes — broadcast & delete all |

**Persistence:** Shape mutations (add, update, remove) are written to the database via Prisma after broadcasting to other clients.

---

## Shared Packages

| Package              | Purpose                                                  |
| -------------------- | -------------------------------------------------------- |
| `@repo/db`           | Prisma client & schema — single source of truth for DB access |
| `@repo/common`       | Shared TypeScript types (`ShapeType`, `DiffType`) and Zod validation schemas (`CreateUserSchema`, `SigninSchema`, `CreateRoomSchema`) |
| `@repo/backend-common` | Shared backend configuration (JWT secret)              |
| `@repo/ui`           | Reusable UI components (Button, Card, Input, FeatureCard) |
| `@repo/typescript-config` | Shared `tsconfig` base configurations              |
| `@repo/eslint-config` | Shared ESLint configurations                           |

---

## Database Schema

PostgreSQL with Prisma ORM. Key models:

```
User ──┬── Room (admin)
       └── Shape ──┬── Rectangle
                   ├── Circle
                   └── Line
```

- **User**: id (UUID), email (unique), password (hashed), name, photo.
- **Room**: id (auto-increment), slug (unique), adminId → User.
- **Shape**: id (UUID), type (enum: Rectangle/Circle/Line), userId → User, roomId → Room.
- **Rectangle/Circle/Line**: Geometry-specific fields with a 1:1 relationship to Shape (cascade delete).

---

## Data Flow

### Drawing a shape (real-time)

```
User A draws          Frontend (CanvasApp)         WebSocket Server         Database
   │                        │                            │                      │
   ├─ mouseup ─────────────►│                            │                      │
   │                        ├─ send("draw", shape) ─────►│                      │
   │                        │                            ├─ broadcast to room ──► User B
   │                        │                            ├─ addShape() ─────────►│
   │                        │                            │                      │ persist
```

### Loading a canvas

```
Browser ──► Next.js Server ──► HTTP Backend (GET /room/:slug)  ──► Room ID
                             ──► HTTP Backend (GET /shape/:id) ──► Existing shapes
         ──► Render CanvasClient (client component)
         ──► useSocket() connects to WS server with JWT
         ──► send("join_room") to subscribe to updates
```

---

## Running the Project

```bash
pnpm install        # Install all dependencies
pnpm dev            # Start all apps in dev mode (via Turborepo)
```

Individual apps:
- Frontend: `http://localhost:3000`
- HTTP Backend: `http://localhost:8080`
- WebSocket Backend: `ws://localhost:8081`

Requires a `DATABASE_URL` environment variable pointing to a PostgreSQL instance.
