import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config"

export const checkAuth = (token: string): string | null => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if (typeof (decoded) == "string") return null;

        if (!decoded || !decoded.id) return null;

        return decoded.id;
    } catch (error) {
        console.log(error);
        return null;
    }
}