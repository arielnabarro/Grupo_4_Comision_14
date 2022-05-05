const express = require('express');
const router = express.Router();

const {cart, detail, products} = require('../controllers/productController');

/* /products */
router.get('/', products)
router.get('/productCart', cart);
router.get('/productDetail', detail);

module.exports = router;
