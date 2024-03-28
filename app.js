import express from "express";

import { config } from "dotenv";
import cookieParser from "cookie-parser";

import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import userRouter from "./router/userRouter.js";
const app = express();
config({ path: "./config/config.env" });
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
dbConnection();
app.use(errorMiddleware);
export default app;
