const express = require('express');
const router = express.Router();
const path = require('path');

const { list, detail, cart, search, add, store, edit, update, remove } = require('../controllers/productController');

// /products 

router
         .get('/', list) 
         .get('/productDetail/:id', detail) 
         .get('/productCart', cart)
         .get('/searchResult', search)
         .get('/productAdd', add)  
         .post('/productAdd', store)  
         .get('/productEdit/:id', edit)
         .put('/productEdit/:id', update)
         .delete('/productDetail/remove/:id', remove)


module.exports = router;
