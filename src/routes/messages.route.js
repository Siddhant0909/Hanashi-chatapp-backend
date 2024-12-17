import express from "express";
import {
  getUsersForSidebar,
  sendMessage,
} from "../controllers/messages.controller.js";
import { protectRoute } from "../middlewares/protectRoute.js";
const router = express.Router();

router.get("/user", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute);

router.post("/send/:id", protectRoute, sendMessage);

export default router;
