const express = require('express');
const router = express.Router();

<<<<<<< HEAD
/* const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator'); */
=======
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
>>>>>>> develop

// const userCheck = require('../middlewares/userCheck');
const {register,login, processRegister, processLogin,logout, profile, updateProfile} = require('../controllers/userController');

/* /users */

router
    .get('/register', register)
    // .post('/register',registerValidator,processRegister)
    .get('/login', login)
    // .post('/login',loginValidator, processLogin)
    // .get('/logout',logout)
<<<<<<< HEAD
    // .get('/profile',profile)
=======
     .get('/profile',profile)
>>>>>>> develop
    // .put('/update-profile',updateProfile)

module.exports = router;
