const {check, body} = require('express-validator');

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
        .withMessage('Debe ingresar una categoría'),

    body('image')
    .custom(( value, {req} ) => {
        let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if(!req.file){
            return Promise.reject('este campo es ogligatorio')
        }if(!allowedExtensions.exec(req.file.filename)){
            return Promise.reject('Solo archivos con estas extensiones .jpeg/.jpg/.png/.gif only.')
        }else{
            return true
        }
    }),

]