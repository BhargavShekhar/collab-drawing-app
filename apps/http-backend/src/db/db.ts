import { prismaClient } from "@repo/db/client"

export const connectToDb = async () => {
    try {
        await prismaClient.$connect();
        console.log("===== Connected to database =====");
    } catch (error) {
        console.log("===== Could not connect to database =====");
        console.error(error);
        throw error;
    }
}