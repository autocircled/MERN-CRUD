const express = require('express')
const router = express.Router()
const ProductsController = require('../controller/ProductsController')

// API Routes
router.get('/products', ProductsController.readProduct)
router.get('/product/:id', ProductsController.readProductDetails)
router.post('/create-product', ProductsController.createProduct)
router.post('/update-product/:id', ProductsController.updateProduct)
router.post('/delete-product/:id', ProductsController.deleteProduct)

// API Routing Endpoint



module.exports = router