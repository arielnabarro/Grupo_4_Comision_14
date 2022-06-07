const express = require('express');
const router = express.Router();



const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');

// const userCheck = require('../middlewares/userCheck');
const {register, login, processRegister, processLogin, profile, adminProfile, logout} = require('../controllers/userController');
const userCheck = require('../middlewares/userCheck');
const adminCheck = require('../middlewares/adminCheck');
const upload = require('../middlewares/uploadImages');

/* /users */

//problema de ruteo con register  post, uploadAvatars.single('avatar')

router
    .get('/register', register)
    .post('/register', registerValidator,processRegister)
    .get('/login', login)
    .post('/login', loginValidator, processLogin)
     .get('/profile', userCheck, profile)
     .get('/logout', logout)
     .get('/admin', adminCheck, adminProfile)
    // .put('/update-profile',updateProfile)

module.exports = router;
