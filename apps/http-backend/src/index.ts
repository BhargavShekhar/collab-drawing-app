import express from "express";
import signupRouter from "./routes/signup";
import signinRouter from "./routes/signin";
import createRoomRouter from "./routes/createRoom";
import { connectToDb } from "./db/db";
import RoomRouter from "./routes/room";
import ChatRouter from "./routes/chat";
import cors from "cors"
import shapeRouter from "./routes/shape";

const app = express();

const port = 3003;

app.use(express.json());
app.use(cors()) // TODO allow only req from my ports

app.use("/api/v1/signup", signupRouter);
app.use("/api/v1/signin", signinRouter);
app.use("/api/v1/create-room", createRoomRouter);
app.use("/api/v1/room", RoomRouter);
app.use("/api/v1/chats", ChatRouter);
app.use("/api/v1/shape", shapeRouter);

connectToDb()
    .then(() => {
        app.listen(port, () => {
            console.log(`--- Server Running on port ${port} ---`);
        })
    })