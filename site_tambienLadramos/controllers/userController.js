const fs = require('fs');
const path = require('path');
const users = require('../data/users.json')
const { validationResult } = require("express-validator");


module.exports = {

    login : (req,res) => res.render('users/login'),


    processLogin: (req, res) => {
        let errors = validationResult(req);
    
        if(errors.isEmpty()) {
            
            const {id, rol, email } = users.find(usuario => usuario.email === req.body.email);
            
            req.session.userLogin = {
                id,
                rol,
                email,
            } 
        

            if(req.body.recordarme){
                res.cookie("userTest", req.session.userLogin,{maxAge: 1000*60*2})
            }
            
            return res.redirect("/");
    
        }else{
          return res.render("index",{
            errores : errors.mapped(),
            old : req.body
          })
        }
    },
    
    register : (req,res) => res.render('users/register'),

    processRegister: (req, res) => {
        let errors = validationResult(req);
    
        if (errors.isEmpty()) {
          let { name, email, password } = req.body;
          let lastID = users.length !== 0 ? users[users.length - 1].id : 0;
          let newUser = {
            id: +lastID + 1,
            name : name.trim(),
            email,
            password : bcryptjs.hashSync(password, 10),
            rol : "user"
          };
    
          users.push(newUser);
    
          fs.writeFileSync(
            path.resolve(__dirname, "..", "data", "users.json"),
            JSON.stringify(users, null, 3),
            "utf-8"
          );
    
          const {id, rol} = newUser;
          req.session.userLogin = {
            id,
            name : name.trim(),
            rol
        }
    
          return res.redirect("/");
    
        }else{
            return res.render("users/register",{
                old : req.body,
                errores : errors.mapped()
            });
    
        }
      },


    profile : (req,res) => {

        const usuarios = JSON.parse(fs.readFileSync('./data/users.json','utf-8'));
        /* const usuario = usuarios.find(usuario => usuario.id === req.session.userLogin.id); */

        return res.render('users/profile', {
        usuarios 
        })

    },

    adminProfile : (req, res) => {
        const usuarioAdmin = users.find(usuario => usuario.rol == admin)

        res.render('admin/adminProfile', {
            usuarioAdmin
        })
    },


    storeUser : (req, res) => {

        let errores = validationResult(req);

        if(!errores.isEmpty()) {
            return res.render('register', {
                errorMsg : errores.mapped()
            })
        }
    },

}
