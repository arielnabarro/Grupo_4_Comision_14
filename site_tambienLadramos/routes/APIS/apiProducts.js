const express = require('express');
const { list, detail, create } = require('../../controllers/APIS/apiProductController');
const router = express.Router();

// /api/products //

router
        .get('/', list)
        .post('/', create)
        .get('/:id', detail)
        
        /* .get('/tableList', adminCheck, tableList)
        .get('/searchResult', search)
        .get('/productDetail/:id', detail) 
        .get('/productCart', cart)
        .get('/productAdd', adminCheck, productValidator,add)  
        .post('/productAdd',adminCheck, productValidator,uploadProducts.single('image'), store)  
        .get('/productEdit/:id', adminCheck, edit)
        .put('/productEdit/:id', adminCheck, uploadProducts.single('image'), update)
        .delete('/productDetail/remove/:id', destroy)
        .get('/info', question)
        .get('/terms', terms)  */


module.exports = router;
