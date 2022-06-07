const express = require('express');
const router = express.Router();
const adminCheck = require('../middlewares/adminCheck');

const { index, /* formContact */ } = require('../controllers/indexController');
const { search } = require('../controllers/productController');
const { adminProfile } = require('../controllers/userController');

/* GET home page. */
router.get
        ('/', index);
        ('/searchResult', search);
        ('/admin', adminCheck, adminProfile)


module.exports = router;
