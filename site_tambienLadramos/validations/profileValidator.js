const {check} = require('express-validator');

module.exports = [

    check('name')
        .isLength({min: 2}).withMessage('Tiene que ingresar dos letras como mínimo').bail()
        .isAlpha().withMessage('Sólo se aceptan caracteres alfabéticos'),

    check('surname')
        .isLength({min: 2}).withMessage('Tiene que ingresar dos letras como mínimo').bail()
        .isAlpha().withMessage('Sólo se aceptan caracteres alfabéticos')
]