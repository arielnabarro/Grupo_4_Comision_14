const fs = require('fs');
const path = require('path');
const users = require('../data/users.json')
const { validationResult } = require("express-validator");


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

    
    register : (req,res) => res.render('users/register'),


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
