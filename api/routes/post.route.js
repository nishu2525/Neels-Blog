import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, getpost } from '../controllers/post.controller.js';
const router =express.Router();

router.post('/create/:userId', verifyToken,create);
router.get('/getposts',getpost)

export default router;