const express = require('express');
const router = express.Router();


const { index, adminProfile } = require('../controllers/indexController');

const adminCheck = require('../middlewares/adminCheck');

/* GET home page. */
router.get
        ('/', index);
        ('/', adminCheck, adminProfile)
        


module.exports = router;
