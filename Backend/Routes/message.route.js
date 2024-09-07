import express from "express"
import { sendMessage, getMessages } from "../Controller/message.controller.js";
import { protectedRoute } from "../Middleware/protectedRoute.js";
const router = express.Router();

router.post("/send/:id", protectedRoute,sendMessage);
router.get("/:id",protectedRoute,getMessages);

export default router