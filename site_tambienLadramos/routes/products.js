const express = require('express');
const router = express.Router();
const path = require('path');

const { listar, cart, detail, search } = require('../controllers/productController');

// /products 

router
         .get('/', listar ) 
         .get('/productCart', cart)
         .get("/Detail", detail)
         .get('/searchResult', search)
        

module.exports = router;
