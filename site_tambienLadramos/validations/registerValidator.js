const db = require('../database/models');
const { check, body } = require('express-validator');

module.exports = [
  check("name")
    .isLength({ min: 2 }).withMessage("El nombre debe tener un mínimo de dos caracteres").bail()
    .isAlpha().withMessage("El nombre sólo puede tener caracteres alfabéticos"),

  check("last_name")
    .isLength({ min: 2 }).withMessage("El apellido debe tener un mínimo de dos caracteres").bail()
    .isAlpha().withMessage("El apellido sólo puede tener caracteres alfabéticos"),

  body("email")
    .notEmpty().withMessage("Debe ingresar un email").bail()
    .isEmail().withMessage("Debe ingresar un email valido")
    .custom(value => {
      return db.User.findOne({
        where : {
          email : value
        }
      }).then(user => {
        if(user){
          return Promise.reject()
        }
      }).catch(() => Promise.reject("Credenciales invalidas"))
  }),

  check("password")
    .isLength({
      min: 6,
      max: 12,
    })
    .withMessage(
      "La contraseña debe tener un mínimo de 6 y un máximo de 12 caracteres"
    ),

  body("password2")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        return false;
      } else {
        return true;
      }
    })
    .withMessage("Las contraseñas ingresadas no son coincidentes"),

  check("terminos")
    .isString("on")
    .withMessage(
      "Debe aceptar los términos y condiciones"
    )
]