const express = require('express');
const router = express.Router();

const {cart, detail, products, add, edit} = require('../controllers/productController');

/* /products */
router.get('/', products)
router.get('/productCart', cart);
router.get('/productDetail', detail);
router.get('/productAdd', add);
router.get('/productEdit', edit);

module.exports = router;
