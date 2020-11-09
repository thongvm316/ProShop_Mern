import express from 'express';
const router = express.Router();

import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// Fetch all product
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.status(401)
    throw new Error('Not Auth')
    res.json(products)
})); // asyncHandler intead of trycatch

// Fetch singe product
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
}));

export default router
