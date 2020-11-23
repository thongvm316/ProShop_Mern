import express from 'express';
const router = express.Router();
import { getProducts, getProductById } from '../controllers/productController.js'


// Fetch all product
router.route('/').get(getProducts)

// Fetch singe product
router.route('/:id').get(getProductById)


export default router


// router.get('/', asyncHandler(async (req, res) => {
//     const products = await Product.find({})
//     // res.status(401)
//     // throw new Error('Not Auth') 
//     // --> test with dispatch error
//     res.json(products)
// })); // asyncHandler intead of trycatch