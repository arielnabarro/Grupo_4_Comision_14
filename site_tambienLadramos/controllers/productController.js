const fs = require('fs');
const path = require('path');

const alimentos = require('../data/products.json');
const categories = require('../data/categories.json');


module.exports = {
    listProducts : (req, res) => {
        return res.render('products', {
            alimentos
        });
    },

    add : (req,res) => {
        return res.render('productAdd',{
            alimentos
        });
    },

    edit : (req,res) => {
    
        return res.render('productEdit',{
            alimentos
        });
    },

    store : (req,res) => {
        let {name,price,category,state,origin} = req.body;
        let lastID = products[products.length - 1].id;
        let images = req.files.map(image => image.filename);
        let newProduct =  {
            id: +lastID + 1,
            name : name.trim(),
            price: +price,
            category: +category,
            img: images.length > 0 ? images : ["noimage.jpeg"],
            features : [origin,state]
        }

        products.push(newProduct);

        fs.writeFileSync(path.resolve(__dirname,'..','data','products.json'),JSON.stringify(products,null,3),'utf-8')

        return res.redirect('/')
    },
    
    products : (req, res) => {
        res.render('products')
    },    
    
    detail : (req, res) => res.render('productDetail'),

    cart : (req, res) => res.render('productCart')
}
