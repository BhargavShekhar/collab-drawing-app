# ========================
# Builder stage
# ========================
FROM node:20-alpine AS builder
# Setup pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

# Copy dependency-related files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY turbo.json ./

# Install ALL dependencies for the build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Run the build for the frontend app
RUN pnpm turbo build --filter=frontend

# ========================
# Runner stage
# ========================
FROM node:20-alpine AS runner
WORKDIR /app

# Setup pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# ---- FIX IS HERE: PROVIDE WORKSPACE CONTEXT ----
# 1. Copy root package manager files
COPY --from=builder /app/package.json /app/pnpm-lock.yaml /app/pnpm-workspace.yaml ./

# 2. Create the app's directory structure and copy its specific package.json
RUN mkdir -p /app/apps/frontend
COPY --from=builder /app/apps/frontend/package.json /app/apps/frontend/package.json

# 3. Install dependencies FOR THAT WORKSPACE ONLY
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --prod --filter frontend --frozen-lockfile
# -----------------------------------------------

# Copy the built application assets
COPY --from=builder /app/apps/frontend/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/apps/frontend/.next/static ./.next/static

# Copy the standalone server files
COPY --from=builder /app/apps/frontend/.next/standalone/server.js .
COPY --from=builder /app/apps/frontend/.next/standalone/.next ./.next

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]