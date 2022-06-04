const express = require('express');
const router = express.Router();
const path = require('path');
const uploadAvatars = require('../middlewares/uploadImageUsers')

const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');

// const userCheck = require('../middlewares/userCheck');
const {register, login, processRegister, processLogin, logout, profile, updateProfile, adminProfile} = require('../controllers/userController');

/* /users */

router
   /*  .get('/register', register)
    .post('/register',registerValidator, uploadAvatars.single(), processRegister) */
    .get('/login', login)
    .post('/login', loginValidator, processLogin)
    // .get('/logout',logout)
     .get('/profile', profile)
    // .put('/update-profile',updateProfile)
    .get('/admin', adminProfile)

module.exports = router;
