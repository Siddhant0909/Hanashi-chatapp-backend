import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import userRoutes from "./routes/user.route.js";
import messageRoutes from "./routes/messages.route.js";
import { connectDb } from "./lib/db.js";
import { app, server } from "./lib/socket.js";
const PORT = process.env.PORT || 3000;

// middlewares

app.use(
  cors({
    origin: ["http://localhost:5173", process.env.CLIENT_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));

app.use(cookieParser());

// routes
app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});
app.use("/api/user", userRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
  connectDb();
});
