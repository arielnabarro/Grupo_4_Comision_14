const express = require('express');
const router = express.Router();

const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const profileValidator = require('../validations/profileValidator');


const {register, login, processRegister, processLogin, profile, logout, updateProfile, editProfile, adminAdd, storeAdmin, usersList} = require('../controllers/userController');
const userCheck = require('../middlewares/userCheck');
const {uploadAvatars} = require('../middlewares/uploadImages');

/* /users */

//problema de ruteo con register  post, uploadAvatars.single('avatar')

router
    .get('/register', register)
    .post('/register', registerValidator,processRegister)
    .get('/login', login)
    .post('/login', loginValidator, processLogin)
    .get('/profile', userCheck,profile)
    .put('/profile', userCheck,profile)
    .get('/logout', logout)
    .get('/edit-profile/:id', editProfile)
    .put('/update-profile/:id',uploadAvatars.single('avatar'), profileValidator,updateProfile)
    .get('/list', usersList)
    .get('/adminAdd', adminAdd) 
    .post('/adminAdd', storeAdmin) 

module.exports = router;
