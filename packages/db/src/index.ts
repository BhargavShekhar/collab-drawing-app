import { PrismaClient } from "../src/generated/prisma"

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

// export const prismaClient = globalForPrisma.prisma ?? new PrismaClient();

export const prismaClient =
    globalForPrisma.prisma ??
    new PrismaClient({
        datasourceUrl: process.env.DATABASE_URL,
    });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prismaClient;