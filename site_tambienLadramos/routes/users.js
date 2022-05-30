const express = require('express');
const router = express.Router();

const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');

// const userCheck = require('../middlewares/userCheck');
const {register,login, processRegister, processLogin,logout, profile, updateProfile} = require('../controllers/userController');

/* /users */

router
    .get('/register', register)
    // .post('/register',registerValidator,processRegister)
    .get('/login', login)
    // .post('/login',loginValidator, processLogin)
    // .get('/logout',logout)
    // .get('/profile',profile)
    // .put('/update-profile',updateProfile)

module.exports = router;
