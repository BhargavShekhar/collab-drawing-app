import { Router } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config"
import { SigninSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db/client";
import bcrypt from "bcrypt"

const signinRouter: Router = Router();

signinRouter.post("/", async (req, res) => {
    const validateData = SigninSchema.safeParse(req.body);

    if (!validateData.success) {
        res.status(400).json({ msg: validateData.error.issues[0]?.message });
        return;
    }

    const { email, password } = validateData.data;

    try {
        const user = await prismaClient.user.findUnique({
            where: { email }
        })

        if (!user) {
            console.log("no user found")
            res.status(404).json({ msg: "No such user found" });
            return;
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            console.log("password did not matched")
            res.status(401).json({ msg: "Incorrect password" });
            return;
        }

        const token = jwt.sign({
            id: user.id
        }, JWT_SECRET);

        res.json({
            msg: "signin succesfull",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "There some issue in signin, please try again later..." });
    }
})

export default signinRouter;