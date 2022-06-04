const bcryptjs = require('bcryptjs');
const { check } = require('express-validator');
const usuarios = require('../data/users.json')

module.exports = [

    check('email')
        .notEmpty().withMessage('Debe ingresar su email').bail()
        .isEmail().withMessage('Formato de email invalido'),

    check('password')
        .notEmpty().withMessage('Debe ingresar su contraseña').bail()
        .custom((value, {req}) => {
            const usuario = usuarios.find(usuario => usuario.email === req.body.email);
            if(!usuario){
                return false
            }else {
                if(!bcryptjs.compareSync(value, usuario.password)){
                    return false
                }
            }
            return true
        }).withMessage('Su contraseña es incorrecta'),
]