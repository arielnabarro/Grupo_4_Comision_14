const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const users = require('../data/users.json')
const { validationResult } = require("express-validator");

const leerUsuarios = () => {
    fs.readFileSync(path.resolve(__dirname, "..", "data", "users.json"),JSON.parse(users, null, 3),
    "utf-8"
  );
} 
module.exports = {
    register : (req,res) => res.render('users/register'),

    processRegister: (req,res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let { name, email, password } = req.body;
            let lastID = users.length !== 0 ? users[users.length - 1].id : 0;
            
            let newUser = {
                id: +lastID + 1,
                rol : "user",
                name: name.trim(),
                email: email,
                password : bcryptjs.hashSync(password, 10),
            };

            users.push(newUser);

            fs.writeFileSync(
                path.resolve(__dirname, "..", "data", "users.json"),
                JSON.stringify(users, null, 3),
                "utf-8"
              );

            return res.redirect("/");
        
        }else{

            return res.render("users/register",{
                old : req.body,
                errores : errors.mapped()
            });
        }
    },

    login : (req,res) => res.render('users/login'),

    processLogin: (req, res) => {
        let errors = validationResult(req);
    
        if(errors.isEmpty()) {
            
            const {id, rol, name, email } = users.find(usuario => usuario.email === req.body.email);
            
            req.session.userLogin = {
                id,
                rol,
                name,
                email,
            } 
        

            if(req.body.recordarme){
                if(req.session.userLogin.rol === 'admin'){
                    const {name, email} = req.session.userLogin;
                    req.session.adminLogin = {
                        name,
                        email
                    }
                    res.cookie("adminLogueado", req.session.adminLogin,{maxAge: 1000*60*2})
                    return res.render('admin/adminProfile',{
                        name,
                        email,
                    })
                }
                else {
                    res.cookie("usertambienLadramos", req.session.userLogin,{maxAge: 1000*60*2})
                    return res.render('users/profile', {
                        name,
                        email,
                        leerUsuarios,
                    })
                }  
            }
            
            return res.redirect("/");
    
        }else{
          res.render('users/login' ,{
            errors : errors.mapped(),
            old : req.body
          })
        }
    },

    //posible raiz del problema de que no funcione en la vista

    logout : (req,res) => {
        req.session.destroy();
        res.cookie('usertambienLadramos',null,{maxAge : -1})
        return res.redirect('/')
      },

    profile : (req,res) => {
        /* const usersRead = JSON.parse(fs.readFileSync('./data/users.json','utf-8')); */
        const userProfile = users.find(user => user.id === req.session.userLogin.id);
        const {name, email} = userProfile
        return res.render('users/profile',{
            userProfile,
            name,
            email
        })
      },

    adminProfile : (req, res) => {

        return res.render('admin/adminProfile')
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

