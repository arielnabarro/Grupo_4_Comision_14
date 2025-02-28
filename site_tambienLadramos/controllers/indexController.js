const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator");
const db = require('../database/models')



module.exports = {
    index : (req, res) => {
        let category = db.Category.findAll({
            include : ['defaultpics', 'products']
        });
        let product = db.Product.findAll({
            include : ['images']
        });
        Promise.all([category,product])
			.then(([category,products,]) => {
				return res.render('index',{
					category,
                    products
				})
			})
			.catch(error => console.log(error))	
    },
    
    products : (req, res) => res.render('products'),
    productCart : (req, res) => res.render('productCart'),
    services : (req, res) => res.render('services'),
    login : (req, res) => res.render('login'),
    aboutUs : (req, res) => res.render('aboutUs'),
}
