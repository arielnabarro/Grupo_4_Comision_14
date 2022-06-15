const express = require('express');
const router = express.Router();

const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
/* const profileValidator = require('../validations/profileValidator'); */


const {register, login, processRegister, processLogin, profile, logout, updateProfile} = require('../controllers/userController');
const userCheck = require('../middlewares/userCheck');
const {uploadAvatars} = require('../middlewares/uploadImages');

/* /users */

//problema de ruteo con register  post, uploadAvatars.single('avatar')

router
    .get('/register', register)
    .post('/register',uploadAvatars.single('avatar'), registerValidator,processRegister)
    .get('/login', login)
    .post('/login', loginValidator, processLogin)
    .get('/profile', userCheck,profile)
    .get('/logout', logout)
    .put('/update-profile',uploadAvatars.single('avatar'),updateProfile)

module.exports = router;
