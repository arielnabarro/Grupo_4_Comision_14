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
                id_avatar : 1     
            })
            .then(user => {
              req.session.userLogin = {
                id : +user.id,
                name : user.name,
                last_name : user.last_name,
                rol : +user.id_rol
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
                    avatar : user.id_avatar,
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

    logout: (req, res) => {
        req.session.destroy();

        
    },

    profile: (req, res) => {
        db.User.findByPk(req.session.userLogin.id,{
          include : ['avatars']
        })
          .then((users) => res.render("users/Profile", {
            users,
          }))
        .catch(error => console.log(error))
      },

    editProfile : (req,res) => {
    
        db.User.findByPk(req.session.userLogin.id,{
            include : ['avatars']
          })
            .then((users) => res.render("users/editProfile", {
              users,
            }))
          .catch(error => console.log(error))
        },

    updateProfile: (req, res) => { 
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            const {id} = req.params;
            const { email, name, avatar } = req.body;

            const usuariosModificados = users.map((user) => {
            if (user.id === id) {
            let usuarioModificado = {
                ...user,
                name : name.trim(),
                email : email.trim(),
                avatar : req.file ? req.file.originalname : user.avatar
            };
        
            if (req.file) {
                if (fs.existsSync(path.resolve(__dirname, "..", "public", "images", 'avatars', user.avatar)) 
                    && user.avatar !== 'perro-informatico.png') {
                fs.unlinkSync(
                    path.resolve(__dirname, "..", "public", "images", 'avatars', user.avatar)
                );
                }
            }
            return usuarioModificado;
            }
            return user;
        });

        fs.writeFileSync(
            path.resolve(__dirname, "..", "data", "users.json"),
            JSON.stringify(usuariosModificados, null, 3),
            "utf-8"
        );

        req.session.userLogin = {
            ...req.session.userLogin,
            name
        }

        return res.redirect("/");
        }else{
            console.log(errors);
            return res.render("users/editProfile", {
                user : req.body,
                errors : errors.mapped()
            });
        }

  },

    storeUser: (req, res) => {
        let errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.render("register", {
                errorMsg: errores.mapped(),
            });
        }
    },
};
