const {check} = require('express-validator');

module.exports = [

    check('name')
        .notEmpty().withMessage('Debe ingresar el nombre del producto')
        .isLength({min:3,max:20}).withMessage('Debe ingresar como mínimo 3 caracteres'),
    
    check('price')
        .notEmpty()
        .withMessage('Debe ingresar el precio del producto'),
    
    check('category')
        .notEmpty()
        .withMessage('Debe ingresar una categoría'),
    
    check('descript')
        .notEmpty()
        .withMessage('Debe ingresar una categoría'),

    check('quantity')
        .notEmpty()
        .withMessage('Debe ingresar una categoría')

]