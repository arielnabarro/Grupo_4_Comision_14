const fs = require('fs');
const path = require('path')

module.exports = {
    index : (req, res) => res.render ('index'),
    products : (req, res) => res.render('products'),
    productCart : (req, res) => res.render('productCart'),
    services : (req, res) => res.render('services'),
    login : (req, res) => res.render('login'),
    
}
