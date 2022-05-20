const express = require('express');
const router = express.Router();
const path = require('path');

const { listProducts, add, edit, update, detail, remove, cart} = require('../controllers/productController');


/* /products */
router.get
            ('/', listProducts);
            ('/products/productAdd', add);
            ('/products/productEdit', edit);
            /* ('/products/productUpdate', update);
            ('/products/productRemove', remove); */
            ('/productDetail', detail);
            ('/products/productCart', cart);
    

module.exports = router;
