const express = require('express');
const router = express.Router();

const {adminAdd, storeAdmin} = require('../controllers/adminController');


router
    .get('/add', adminAdd) 
    .post('/add', storeAdmin) 



module.exports = router;