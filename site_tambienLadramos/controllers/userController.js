const fs = require('fs');
const path = require('path');
const users = require('../data/users.json')
const { validationResult } = require("express-validator");
const modelUsers = require('../model/modelUsers')

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
        const resultadoValidacion = validationResult(req);

        if (resultadoValidacion.errors.length > 0) {
            return res.render('../views/users/register', {
                errors: resultadoValidacion.mapped(),
                oldData: req.body
            });
        }
    //     console.log(req.body, req.file);
        
    //     let userToCreate = {
    //     ...req.body,
    //     avatar: req.file.filename
    // }
        modelUsers.create(req.body)
        return res.send("se registro el usuario")
        
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

