const fs = require('fs');
const path = require('path');
const users = require('../data/users.json')
const { validationResult } = require("express-validator");
const bcryptjs =require('bcryptjs')
// const modelUsers = require('../model/modelUsers')

module.exports = {

    login : (req,res) => res.render('users/login'),


    processLogin: (req, res) => {
        let errors = validationResult(req);
    
        if (errors.isEmpty()) {
            
            const {id, rol, email } = users.find(usuario => usuario.email === req.body.email);
        }

        /* req.session.userLogin = {
            id,
            rol,
            email,
        } */
    },

    //posible raiz del problema de que no funcione en la vista
    
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

            return res.redirect("profile");
        
        }else{

            return res.render("users/register",{
                old : req.body,
                errores : errors.mapped()
            });
        }
    },
    
    

    profile : (req,res) => {

        const users = JSON.parse(fs.readFileSync('./data/users.json','utf-8'));
        /* const usuario = usuarios.find(usuario => usuario.id === req.session.userLogin.id); */

        return res.render('users/profile', {
        users 
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

