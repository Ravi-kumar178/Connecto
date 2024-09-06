import express from "express"
import { authLogin, authLogout, authSignup } from "../Controller/auth.controller.js";
import { protectedRoute } from "../Middleware/protectedRoute.js";

const router = express.Router();


//routes
router.post("/signup",authSignup);
router.post("/login",authLogin);
router.post("/logout",authLogout);


export default router