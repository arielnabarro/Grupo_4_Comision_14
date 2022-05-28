const express = require('express');
const router = express.Router();

const { index, formContact } = require('../controllers/indexController');
const { search } = require('../controllers/productController');

/* GET home page. */
router.get
        ('/', index);
        ('/searchResult', search);
        ('/formContact', formContact);


module.exports = router;
