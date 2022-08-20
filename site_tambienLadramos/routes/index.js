const express = require('express');
const router = express.Router();


const { index, adminProfile, aboutUs } = require('../controllers/indexController');

const adminCheck = require('../middlewares/adminCheck');

/* GET home page. */
router
        .get('/', index)
        .get('/aboutus', aboutUs)

        


module.exports = router;
