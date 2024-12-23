import express from 'express';
import { LoginAdmin } from '../controllers/admin.controllers.js';

const router = express.Router();

router.post("/login", LoginAdmin);

export default router;
