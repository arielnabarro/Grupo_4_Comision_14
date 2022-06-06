const express = require('express');
const router = express.Router();
/* const upload= require('../middlewares/uploadImages') */

const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');

// const userCheck = require('../middlewares/userCheck');
const {register, login, processRegister, processLogin, profile, adminProfile} = require('../controllers/userController');

/* /users */

router
    .get('/register', register)
    .post('/register',registerValidator/* , upload.single('avatar') */, processRegister)
    .get('/login', login)
    .post('/login', loginValidator, processLogin)
    // .get('/logout',logout)
     .get('/profile', profile)
    // .put('/update-profile',updateProfile)
    .get('/admin', adminProfile)

module.exports = router;
