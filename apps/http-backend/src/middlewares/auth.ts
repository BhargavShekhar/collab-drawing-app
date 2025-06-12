import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config"

declare global {
    namespace Express {
        interface Request {
            userId?: string
        }
    }
}

interface TokenPayload extends JwtPayload {
    id: string
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
    // const authHeader = req.headers["authorization"];
    // const token = authHeader && authHeader.split(" ")[1];

    const token = req.headers["authorization"];

    if (!token) {
        res.status(401).json({ msg: "can not get token, please signin again" });
        return;
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err?.name === "TokenExpiredError") {
            res.status(401).json({ msg: "Session expired, please login again" });
            return;
        }

        if (err || !user) {
            res.status(403).json({ msg: "Could not verify token, please signin again!!" });
            return;
        }

        const id = (user as TokenPayload).id;
        req.userId = id;

        next();
    })
}