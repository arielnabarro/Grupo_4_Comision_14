const {check, body} = require('express-validator');

module.exports = [

    check('title')
        .notEmpty().withMessage('Debe ingresar el nombre del producto')
        .isLength({min:3,max:20}).withMessage('Debe ingresar como mínimo 3 caracteres'),
    
    check('id_brand')
    .notEmpty()
    .withMessage('Debe ingresar la marca del producto'),

    check('price')
        .notEmpty()
        .withMessage('Debe ingresar el precio del producto'),

    check('weight')
    .notEmpty()
    .withMessage('Debe ingresar el peso del producto'),
    
    check('quantity')
        .notEmpty()
        .withMessage('Debe ingresar una cantidad de unidades'),    
    
    check('id_category')
        .notEmpty()
        .withMessage('Debe ingresar una categoría'),
    
    check('descript')
        .notEmpty()
        .withMessage('Debe ingresar una categoría'),

    body('image')
    .custom(( value, {req} ) => {
        let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if(!req.file.originalname.match(/\.(pdf|jpg|jpeg|png|gif|webp)$/)
        ){
            return Promise.reject('Este campo es ogligatorio')
        }else{
            return true
        }
    }),

]