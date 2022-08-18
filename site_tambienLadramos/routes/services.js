const express = require('express');
const router = express.Router();

const {service, turn} = require('../controllers/serviceController');

/* /services */
router
        .get('/', service)
        .get('/turns', turn)

module.exports = router;