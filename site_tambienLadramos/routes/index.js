const express = require('express');
const router = express.Router();

const { index } = require('../controllers/indexController');
const { listar, search } = require('../controllers/productController');

/* GET home page. */
router.get('/', index);
router.get('/searchResult', search)

module.exports = router;
