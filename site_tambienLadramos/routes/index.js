const express = require('express');
const router = express.Router();
const adminCheck = require('../middlewares/adminCheck');

const { index } = require('../controllers/indexController');
const { search } = require('../controllers/productController');


/* GET home page. */
router.get
        ('/', index);
        ('/searchResult', search);
        


module.exports = router;
