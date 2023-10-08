import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// @desc    Fetch all unique categories
// @route   GET /api/categories
// @access  Public
const getAllCategories = asyncHandler(async (req, res) => {
    try {
        const uniqueCategories = await Product.distinct('category');
        res.json({ categories: uniqueCategories });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching categories' });
      }
  });

  export {
    getAllCategories
  }