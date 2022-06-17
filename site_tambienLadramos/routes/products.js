const express = require('express');
const router = express.Router();
const {uploadProducts} = require('../middlewares/uploadImages');
const admiCheck = require('../middlewares/adminCheck')

/* const productValidator = require('../validations/productValidator'); */
const { list, detail, search, cart, add, store, edit, update, remove, question, terms } = require('../controllers/productController');


// /products 

router
        .get('/', list) 
        .get('/searchResult', search)
        .get('/productDetail/:id', detail) 
        .get('/productCart', cart)
        .get('/productAdd', admiCheck,add)  
        .post('/productAdd', uploadProducts.single('image'), store)  
        .get('/productEdit/:id',admiCheck, edit)
        .put('/productEdit/:id', uploadProducts.single('image'), update)
        .delete('/productDetail/remove/:id', remove)
        .get('/info', question)
        .get('/terms', terms) 


module.exports = router;
