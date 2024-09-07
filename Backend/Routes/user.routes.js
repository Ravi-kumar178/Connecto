import express from 'express'
import { protectedRoute } from '../Middleware/protectedRoute.js';
import { getUserForSidepoints } from '../Controller/user.controller.js';

const router = express.Router();

router.get("/",protectedRoute,getUserForSidepoints);

export default router