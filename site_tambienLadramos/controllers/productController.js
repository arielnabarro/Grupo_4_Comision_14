const fs = require('fs');
const path = require('path');

const products = require('../data/products.json');
const categories = require('../data/categories.json');

/* const alimentos = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/products.json'),'utf-8')); */

module.exports = {
    listar : (req, res) => {

        /* const leerProductos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','products.json')));   
        const leerCategorias= JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','categories.json')));   */
        return res.render('products', {
            products,
            categories
        })

    },

    search : (req, res) => {
        let {keyword} = req.query;
        let aver = keyword.join("");
        const result = products.filter(product => product.name.toLowerCase().includes(aver));

        let namesCategories = categories.map(category => {
            return {
                id : category.id,
                name : category.name
            }
        });

            return res.render('searchResult', {
                products : result,
                aver,
                namesCategories
                }
            )
     },

    add : (req,res) => {
        return res.send('productAdd')
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

        return res.redirect('/products')
    },  
    
    detail : (req, res) => res.render('productDetail'),

    cart : (req, res) => res.render('productCart')
}
