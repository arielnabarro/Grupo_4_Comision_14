const fs = require('fs');
const path = require('path');
const users = require('../data/users.json')
// const { validationResult } = require("express-validator");


module.exports = {



    login : (req,res) => res.render('./users/login'),
    
    register : (req,res) => res.render('./users/register')
}
