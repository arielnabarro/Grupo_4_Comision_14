const express = require('express');
const router = express.Router();
const path = require('path');

const { listar, cart } = require('../controllers/productController');

// /products 

router
         .get('/', listar ) 
         .get('/productCart', cart)
        

module.exports = router;
