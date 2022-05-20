const express = require('express');
const router = express.Router();

const {service} = require('../controllers/serviceController');

/* /services */
router.get('/', service);

module.exports = router;