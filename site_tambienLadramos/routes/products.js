const express = require('express');
const router = express.Router();
const {uploadProducts} = require('../middlewares/uploadImages');
const adminCheck = require('../middlewares/adminCheck')

const productValidator = require('../validations/productValidator'); 
const { list, tableList, detail, search, cart, add, store, edit, update, question, terms, destroy } = require('../controllers/productController');


// /products 

router
        .get('/', list)
        .get('/tableList', tableList)
        .get('/searchResult', search)
        .get('/productDetail/:id', detail) 
        .get('/productCart', cart)
        .get('/productAdd',add)  
        .post('/productAdd', uploadProducts.single('image'), store)  
        .get('/productEdit/:id', edit)
        .put('/productEdit/:id', uploadProducts.single('image'), update)
        .delete('/productDetail/remove/:id', destroy)
        .get('/info', question)
        .get('/terms', terms) 


module.exports = router;
