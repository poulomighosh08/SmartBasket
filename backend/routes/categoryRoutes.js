import express from 'express';
import { getAllCategories } from '../controllers/categoryController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/')
      .get(protect, getAllCategories);

export default router;
