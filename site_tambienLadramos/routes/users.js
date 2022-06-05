const express = require('express');
const router = express.Router();
const uploadAvatars = require('../middlewares/uploadImageUsers')

const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');

// const userCheck = require('../middlewares/userCheck');
const {register, login, processRegister, processLogin, profile,  adminProfile} = require('../controllers/userController');

/* /users uploadAvatars.single()*/

//problema de ruteo con register  post

router
    .get('/register', register)
    .post('/register',registerValidator, uploadAvatars.single('avatar'),processRegister) 
    .get('/login', login)
    .post('/login', loginValidator, processLogin)
    // .get('/logout',logout)
     .get('/profile', profile)
    // .put('/update-profile',updateProfile)
    .get('/admin', adminProfile)

module.exports = router;
