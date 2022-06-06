const {check, body} = require('express-validator');
const users = require('../data/users.json')
// const path = require('path')

//incompleto

module.exports = [

    check('name')
        .isLength({min: 2}).withMessage('Como mínimo dos letras').bail()
        .isAlpha().withMessage('Solo letras porfa!'),

    // check('apellido')
    //     .isLength({min: 2}).withMessage('Como mínimo dos letras').bail()
    //     .isAlpha().withMessage('Solo letras porfa!'),
    
    check('email')
        .notEmpty().withMessage('Debes ingresar tu email').bail()
        .isEmail().withMessage('Email no válido').bail()
        .custom((value) => {
            const user = users.find(user => user.email === value);
            if(user){
                return false
            }else{
                return true
            }
        }).withMessage('El email ya está registrado!'),

    check('password')
        .isLength({min: 6, max:12}).withMessage('La contraseña debe tener entre 6 y 12 caracteres'),
    
    body('password2')
        .custom((value,{req}) => {
            if(value !== req.body.password){
                return false
            }
            return true
        }).withMessage('Las contraseñas no coinciden!!'),

    // body('image').custom((value, { req }) => {
    //     let file = req.file;
    //     let acceptedExtensions = ['jpg', 'png'];

    //     if (!file) {
    //         throw new Error('tiene que subir una imagen');
    //     } else {
    //         let fileExtensions = path.extname(file.originalname);
    //         if (!acceptedExtensions.includes(fileExtensions)) {
    //             throw new Error(`solo imagenes de extensiones ${acceptedExtensions.join(', ')}`);
    //         }
    //     }
    //     return true; 
    // }),
    
    check('terminos')
        .isString('on')
        .withMessage('Debes aceptar términos y condiciones')

]