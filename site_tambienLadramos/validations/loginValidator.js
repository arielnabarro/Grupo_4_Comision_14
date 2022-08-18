const bcryptjs = require('bcryptjs');
const { check, body } = require('express-validator');
const { User } = require('../database/models')
module.exports = [

    check('email')
        .notEmpty().withMessage('Debe ingresar su email').bail()
        .isEmail().withMessage('Formato de email invalido'),        

    body('password')
        .notEmpty().withMessage('Debe ingresar su contraseña').bail()
        .custom((value, {req}) => {
            return User.findOne({
            where : {
                email : req.body.email
            }
            }).then(user => {
            if(!user || !bcryptjs.compareSync(value, user.password)){
                return Promise.reject()
            }
            }).catch(() => Promise.reject('Credenciales inválidas'))
        })
]