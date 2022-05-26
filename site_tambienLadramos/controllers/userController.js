const fs = require('fs');
const path = require('path');



module.exports = {
    login : (req,res) => res.render('./users/login'),
    register : (req,res) => res.render('./users/register')
}
