const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator");
const db = require('../database/models')



module.exports = {
    index : (req, res) => {
        db.Product.findAll({
            include : ['category']
        })
            .then(product => {
                return res.render('index', {
                    product
                })
            })        
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
