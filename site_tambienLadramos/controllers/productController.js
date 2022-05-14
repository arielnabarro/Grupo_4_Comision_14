const fs = require('fs');
const path = require('path');

const alimentos = require('../data/products.json');


module.exports = {
    add : (req,res) => {
            return res.render('productAdd',{
                alimentos
            })
        },

    edit : (req,res) => {
    
        return res.render('productEdit',{
            alimentos
        })
    },
    
    products : (req, res) => {
        res.render('products')
    },    
    
    detail : (req, res) => res.render('productDetail'),

    cart : (req, res) => res.render('productCart')
}