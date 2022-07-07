const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator");
const db = require('../database/models')



module.exports = {
    index : (req, res) => {
        db.Category.findAll({
            include : ['defaultpics']
        })
            .then(category => {
                return res.render('index', {
                    category
                })
            })
            .catch(error => console.log(error))
    },

    
    products : (req, res) => res.render('products'),
    productCart : (req, res) => res.render('productCart'),
    services : (req, res) => res.render('services'),
    login : (req, res) => res.render('login'),
    
    adminProfile : (req, res) => {

        return res.render('admin/adminProfile', {
            
        })
    },
}
