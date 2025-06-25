<div align="center">

<img src="https://user-images.githubusercontent.com/0000000/0000000/canvas-logo-banner.svg" height="150" alt="Canvas Banner"/>

# 🎨 **LiveCanvas**
*Draw. Collaborate. Create. In Real-Time.*

A multiplayer, collaborative infinite canvas web app for sketching, diagramming, and ideation — powered by WebSockets, built with performance in mind.

[![Made with Bun](https://img.shields.io/badge/Runtime-Bun-blue?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![Next.js](https://img.shields.io/badge/Frontend-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![WebSockets](https://img.shields.io/badge/Realtime-WebSockets-purple?style=for-the-badge&logo=socketdotio)]()
[![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748?style=for-the-badge&logo=prisma)](https://prisma.io)

</div>

---

## 🖌️ Features

> ✏️ Draw, 🫂 collaborate, and 💾 sync — all in one place.

- 🧠 **Real-Time Collaboration** via WebSockets  
- 📐 **Infinite Panning Canvas** — like Excalidraw, Figma  
- 🔁 **Undo/Redo Support** using smart diff syncing  
- 💡 Modular architecture and scalable event system with in build canvas logic
- 📦 **Prisma-backed Storage** for persistence  
- 🧱 Built in a clean **monorepo** structure  

---

## 🏗 Tech Stack

| Layer      | Stack                             |
|------------|-----------------------------------|
| Frontend   | Next.js, React, Tailwind CSS      |
| Backend    | Express / Node.js (or API routes) |
| Realtime   | Native WebSockets                 |
| Database   | PostgreSQL + Prisma ORM           |
| Dev Tools  | Bun, Turborepo, TypeScript        |

---

## 🌀 Realtime Engine
Users join a shared room

WebSocket syncs:

👥 Join/Leave

✏️ Draw/Move

↩️ Undo/Redo

## Future-ready for presence indicators, cursor sharing, etc.

🧪 Planned Features
🔄 Collaborative Undo/Redo

🎯 Selection + Group Transformations

🌈 Drawing tools: colors, shapes, text

💬 In-canvas Chat (already supported)

🪄 AI-assist integration (🤫 coming soon?)

## 🤝 Contributing
We love collaborators!
You can help with:

🧠 Better syncing algorithms

💅 Improved UI/UX

🧪 Testing & performance

🔌 Plugin system?