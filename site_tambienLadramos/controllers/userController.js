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
                name: name.trim(),
                last_name: last_name.trim(),
                email: email.trim(),
                password: bcryptjs.hashSync(password, 10),
                id_rol : 2,
                        //req.file ? req.file.filename : "gato-mambru.jpg"
            })

            .then(user => {
                db.Address.create({
                    user_id : user.id,
                    type_id : 1
                }).then( () => {
                    return res.render("users/login")
                })
            })
            .catch(error => console.log(error))
        
        } else {
            return res.render("users/register", {
                old : req.body,
                errors : errors.mapped(),
            });
        }
    },

    //         users.push(newUser);

    //         fs.writeFileSync(
    //             path.resolve(__dirname, "..", "data", "users.json"),
    //             JSON.stringify(users, null, 3),
    //             "utf-8"
    //         );

    //         return res.redirect("/");
    //     } else {
    //         return res.render("users/register", {
    //             old: req.body,
    //             errores: errors.mapped(),
    //         });
    //     }
    // },

    login: (req, res) => res.render("users/login"),

    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {

            const {email} = req.body

            db.users.findOne({
              where : {
                email
              }
            }).then( ({id, name, last_name, id_rol}) => {
              req.session.userLogin = {
                id : +id,
                name,
                last_name,
                rol : +id_rol
            }
            if(req.body.remember){
                res.cookie('tambienladramos',req.session.userLogin,{maxAge:3000*60*2})
            }
            res.redirect('/')
            })
            
          } else {
            return res.render("users/Login", {
              old: req.body,
              errors: errors.mapped(),
            });
          }
        },

    //posible raiz del problema de que no funcione en la vista

    logout: (req, res) => {
        req.session.destroy();

        if (req.session && req.session.userLogin.rol === "user") {
            res.cookie("usertambienLadramos", null, { maxAge: -1 });
            return res.redirect("/");
        } else {
            res.cookie("adminLogueado", null, { maxAge: -1 });
            return res.redirect("/");
        }
    },

    profile: (req, res) => {
        let user = db.users.findByPk(req.session.userLogin.id,{
          include : ['avatars']
        })
          .then((user) => res.render("users/Profile", {
            user,
          }))
      },

    editProfile : (req,res) => {
    
        const { id } = req.params;
        let user = db.users.findByPk(req.params.id);
        let avatar = db.avatars.findByPk(req.params.id);
        let rol = db.rols.findByPk(req.params.id)

        Promise.all([user, avatar, rol])
            .then(([user, avatar, rol]) => {
                return res.render("users/editprofile", {
                    user,
                    avatar,
                    rol,
                    });
            })
            .catch(error => console.log(error))	
    },

    updateProfile: (req, res) => { 
        let errors = validationResult(req);
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
