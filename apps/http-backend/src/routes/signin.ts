import { Router } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config"
import { SigninSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db/client";
import bcrypt from "bcrypt"

const signinRouter: Router = Router();

signinRouter.post("/", async (req, res) => {
    const validateData = SigninSchema.safeParse(req.body);

    if(!validateData.success) {
        res.status(400).json({ msg: "Did not received a valid data", error: validateData.error });
        return;
    }

    const { email, password } = validateData.data;

    try {        
        const user =  await prismaClient.user.findUnique({
            where: { email }
        })

        if(!user) {
            res.status(404).json({ msg: "No such user found" });
            return;
        }

        const match = await bcrypt.compare(password, user.password);

        if(!match) {
            res.status(401).json({ msg: "Incorrect password" });
            return;
        }

        const token = jwt.sign({
            id: user.id
        }, JWT_SECRET);

        // res.header("Authorization", `Bearer ${token}`)
        res.json({ msg: "signin succesfull", token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "There some issue in signin, please try again later..." });
    }
})

export default signinRouter;