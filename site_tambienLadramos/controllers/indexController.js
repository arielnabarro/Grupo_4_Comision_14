const fs = require('fs');
const path = require('path')

const products = require('../data/products.json');
const categories = require('../data/categories.json');


module.exports = {
    index : (req, res) => res.render ('index'), 
    products : (req, res) => res.render('products'),
    productCart : (req, res) => res.render('productCart'),
    services : (req, res) => res.render('services'),
    login : (req, res) => res.render('login'),
    
}
