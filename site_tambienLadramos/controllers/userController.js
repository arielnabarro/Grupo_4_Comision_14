const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require('../database/models')
const { Sequelize, Op } = require("sequelize");

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
            include : ['rols']
          });
          let rols = db.Rol.findAll()
          let user = db.User.findByPk(req.session.userLogin.id);
          let products = db.Product.findAll({
          });
            Promise.all([users, user, rols, products])
              .then(([users, user, rols, products]) => {
                  return res.render("users/profile", {
                      users,
                      user,
                      rols,
                      products
                  })
              }).catch(error => console.log(error))                
            },       
            
    editProfile : (req,res) => {
      let userToEdit = db.User.findByPk(req.params.id);
      let userLogged = db.User.findByPk(req.session.userLogin.id);

      Promise.all([userToEdit, userLogged])
        .then(([userEdit, user ]) => {
            return res.render("users/editProfile", {
                userEdit : userEdit,
                user
            })
        }).catch(error => console.log(error))
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
            avatar : req.file ? req.file.filename : avatar || 'perro-informatico.png'
          },
          {
            where : {
              id : req.session.userLogin.id
            }
          }  
        ).then( () => res.redirect('/users/profile'))
    })
    .catch(error => console.log(error))
  },
  adminAdd : (req, res) => {
    db.User.findByPk(req.session.userLogin.id, {
        include : ['rols'],
        where : {
            id_rol : 1
        }
    })
    .then(admin => {
        return res.render('users/adminAdd', {
            admin
        })
    })
    .catch(error => console.log(error))	
},

  storeAdmin: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
        let { name, last_name, email, password } = req.body;

        db.User.create({
            name: name,
            last_name: last_name,
            email: email,
            password: bcryptjs.hashSync(password, 10),
            id_rol : 1,
            avatar : 'perro-informatico.png'   
        })
        .then(() => {
          if (req.session.userLogin) {
            req.session.destroy();
            if (res.cookie) {
              res.cookie('tambienLadramos',null,{maxAge : -1})
            }
          }
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
  

    usersList: (req, res) => {
      db.User.findAll({
        include : ['rols']
      })
        .then((user)=> {
          return res.render('users/usersList', {
            user
          })
        })
    },

    logout: (req, res) => {
        req.session.destroy();
        res.cookie('tambienLadramos',null,{maxAge : -1})
        res.redirect('/')
      }      
  };
