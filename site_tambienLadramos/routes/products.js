const express = require('express');
const router = express.Router();
const path = require('path');

const { listar, cart, search } = require('../controllers/productController');

// /products 

router
         .get('/', listar ) 
         .get('/productCart', cart)
         .get('/searchResult', search)
        

module.exports = router;
