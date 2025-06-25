import { z } from "zod"

const CreateUserSchema = z.object({
    name: z.coerce.string().min(3).max(20),
    password: z.coerce.string().min(6),
    email: z.coerce.string().email(),
    photo: z.coerce.string()
})

const SigninSchema = z.object({
    email: z.coerce.string().email(),
    password: z.coerce.string().min(6)
})

const CreateRoomSchema = z.object({
    slug: z.coerce.string(),
    adminId: z.coerce.string()
})

export { CreateRoomSchema, SigninSchema, CreateUserSchema }