const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require('../database/models')

// const fs = require("fs");
// const path = require("path");
// const users = require("../data/users.json");
/* const leerUsuarios = () => {
    fs.readFileSync(path.resolve(__dirname, "..", "data", "users.json"),JSON.parse(users, null, 3),
    "utf-8"
  );
}  */

module.exports = {
    register: (req, res) => res.render("users/register"),

    processRegister: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let { name, last_name, email, password } = req.body;

            db.User.create({
                name: name,
                last_name: last_name,
                email: email,
                password: bcryptjs.hashSync(password, 10),
                id_rol : 2,
                avatar : 'perro-informatico.png'   
            })
            .then(user => {
              req.session.userLogin = {
                id : +user.id,
                name : user.name,
                last_name : user.last_name,
                rol : +user.id_rol,
                avatar : user.avatar
              }
              res.locals.user = req.session.user;
                res.redirect('/')
                })
            .catch(error => console.log(error))
        
        } else {
            return res.render("users/register", {
                old : req.body,
                errors : errors.mapped(),
            });
        }
    },

    login: (req, res) => res.render("users/login"),

    processLogin: (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
          const {email} = req.body;

            db.User.findOne({
              where : {
                email : email
              }
            }).then(user => {
                  req.session.userLogin = {
                    id : user.id,
                    email : user.email,
                    name : user.name,
                    avatar : user.avatar,
                    rol : +user.id_rol
            }
            res.locals.user = req.session.user
            if(req.body.remember){
                res.cookie('tambienladramos', req.session.userLogin,{maxAge:3000*180*2})
            }
            res.redirect('/')
            })
            .catch(error => console.log(error))
            
          } else {
            return res.render("users/Login", {
              old: req.body,
              errors: errors.mapped(),
            });
          }
        },

        profile: (req, res) => {
          let users = db.User.findAll({
            include : ['rols'],
            where : {
              id_rol : 1
            }
          });
          let user = db.User.findByPk(req.session.userLogin.id);
            let products = db.Product.findAll();
            Promise.all([users, user, products])
            .then(([users, user, products]) => {
                return res.render("users/profile", {
                    users,
                    user,
                    products
                });
            }).catch(error => console.log(error))	
        },
            
          
    editProfile : (req,res) => {
    
      db.User.findByPk(req.session.userLogin.id)
      .then((users) => res.render("users/editProfile", {
        users,
      }))
    .catch(error => console.log(error))
  },

    updateProfile: (req, res) => { 
      const {name,last_name,email,password, avatar} = req.body;
      db.User.findByPk(req.session.userLogin.id,{
        attributes : ['password'],
    })
      .then(user => {
        db.User.update(
          {
            name : name.trim(),
            last_name : last_name.trim(),
            email : email,
            password : password ? bcryptjs.hashSync(password, 10) : user.password,
            avatar : req.file? req.file.filename : avatar
          },
          {
            where : {
              id : req.session.userLogin.id
            }
          }
        )
    }).catch(error => console.log(error))
  },
        /* const errors = validationResult(req);
        const id = +req.params.id;
        const {name, last_name, email} = req.body;
        if (errors.isEmpty()) {
            db.User.update({
              name,
              last_name,
              email,
              id_avatar : req.file ? req.file.filename : req.session.userLogin.avatar
            },
            {
              where : {
                id : id
              }
            })
            .then(user => {
              res.redirect('users/profile')
            })
            .catch(error => console.log(error))
        
            if (req.file) {
                if (fs.existsSync(path.resolve(__dirname, "..", "public", "images", 'avatars', user.avatar)) 
                    && user.avatar !== 'perro-informatico.png') {
                fs.unlinkSync(
                    path.resolve(__dirname, "..", "public", "images", 'avatars', user.avatar)
                );
                }
            }
            return usuarioModificado;

        }else{
            console.log(errors);
            return res.render("users/editProfile", {
                user : req.body,
                errors : errors.mapped()
            });
        }
   */

    /* storeUser: (req, res) => {
        let errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.render("register", {
                errorMsg: errores.mapped(),
            });
        }
    }, */
    logout: (req, res) => {
        req.session.destroy();
        res.cookie('tambienLadramos',null,{maxAge : -1})
        res.redirect('/')
      }

      
  };
