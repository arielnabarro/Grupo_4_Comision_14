const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadImages');


const { list, detail, cart, search, add, store, edit, update, remove } = require('../controllers/productController');


// /products 

router
         .get('/', list) 
         .get('/productDetail/:id', detail) 
         .get('/productCart', cart)
         .get('/searchResult', search)
         .get('/productAdd', add)  
         .post('/productAdd', upload.single('image'), store)  
         .get('/productEdit/:id', edit)
         .put('/productEdit/:id', upload.single('image'), update)
         .delete('/productDetail/remove/:id', remove)


module.exports = router;
