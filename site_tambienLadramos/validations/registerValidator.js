const {check, body} = require('express-validator');
const users = require('../data/users.json')

module.exports = [

    check('name')
        .isLength({min: 2}).withMessage('Tiene que ingresar dos letras como mínimo').bail()
        .isAlpha().withMessage('Sólo se aceptan caracteres alfabéticos'),
    
    check('email')
        .notEmpty().withMessage('Debe ingresar su email').bail()
        .isEmail().withMessage('Formato de email invalido').bail()
        .custom((value) => {
            const usuario = users.find(user => user.email === value);
            if(usuario){
                return false
            }else{
                return true
            }
        }).withMessage('El email ya se encuentra registrado'),

    check('password')
        .isLength({min: 6, max:12}).withMessage('La contraseña debe tener entre 6 y 12 caracteres'),
    
    body('password2')
        .custom((value,{req}) => {
            if(value !== req.body.password){
                return false
            }
            return true
        }).withMessage('Las contraseñas ingresadas no coinciden'),
    
    check('terminos')
        .isString('on')
        .withMessage('Debe aceptar términos y condiciones')

]