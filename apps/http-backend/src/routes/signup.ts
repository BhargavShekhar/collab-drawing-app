import { Router } from "express"
import bcrypt from "bcrypt"
import { CreateUserSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db/client";

const signupRouter: Router = Router();

signupRouter.post("/", async (req, res) => {
    const validateData = CreateUserSchema.safeParse(req.body);

    if (!validateData.success) {
        res.status(400).json({
            msg: "Did not recived a valid data",
            error: validateData.error.format()
        });
        return;
    }

    const { email, name, password, photo } = validateData.data;

    try {
        const existingUser = await prismaClient.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            res.status(409).json({ msg: "User already exists" });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prismaClient.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
                photo
            }
        })

        res.json({ msg: "User created sucessfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "There some issue in signup, please try again later..." });
    }
})

export default signupRouter;