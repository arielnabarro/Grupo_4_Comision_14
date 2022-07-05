const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator");
/* const products = require('../data/products.json'); */
const db = require('../database/models')
/* const productsFilePath = path.join(__dirname, '../data/products.json'); */
/* 
const readProducts = () => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    return products
} */


module.exports = {
    list : (req, res) => {
        db.Product.findAll({
            include : ['images', 'category']

        })
            .then(product => {
                return res.render("products", {
                    product
                    });
            })
            .catch(error => console.log(error))
        },
        /* return res.render('products', {
            leerProductos : readProducts(),
            products,
            categories,
        }); */

    detail : (req, res) => {
        db.Product.findByPk(req.params.id, {
            include : ['images', 'category']
        })
            .then(product => {
                return res.render('productDetail', {
                    product
                });
            })
            .catch(error => console.log(error))
        /* const { id } = req.params;
        const product = products.find((product) => product.id === +id);

        return res.render("productDetail", {
        product
        }); */
    },

    search : (req, res) => {
        let {keyword} = req.query;
        let noSpaceKeyword = keyword.join("");
        db.Product.findAll({
            include : ['images']
        })
            .then(product => {
                let result = product.filter(producto => producto.title.toLowerCase().includes(noSpaceKeyword))
        
                    return res.render('searchResult', {
                        result,
                        noSpaceKeyword
                        }
                    )
            })
            .catch(error => console.log(error))
        
     },

    add : (req,res) => {
        db.categories.findAll()
            .then(categories => {
                return res.render('productAdd', {
                    categories
                })
        })
        .catch(error => console.log(error))
    },

    edit : (req,res) => {
    
        const { id } = req.params;
        let product = db.products.findByPk(req.params.id);

        let categories = db.categories.findAll();

        Promise.all([product, categories])
            .then(([product, categories]) => {
                return res.render("productEdit", {
                    categories,
                    product,
                    });
            })
            .catch(error => console.log(error))	
    },

    update : (req, res) => {
        const { id } = req.params;
        let { name, price, category } = req.body;
        
        const productsUpdated = products.map((product) => {
          if (product.id === +id) {
            let productModify = {
              ...product,
              name : name,
              price: +price,
              category: +category,
              image : req.file ? req.file.filename : product.image
            }

            if(req.file) {
                if(fs.existsSync(path.resolve(__dirname, '..', 'public', 'images', 'Alimento-balanceado', product.image)) && product.image !== "Logo.png" ) {
                    fs.unlinkSync(path.resolve(__dirname, '..', 'public', 'images', 'Alimento-balanceado', product.image));
                }          
            }
                return productModify;
            }else {
                return product;
            }        
        });
    
        fs.writeFileSync(path.resolve(__dirname,'..','data','products.json'),JSON.stringify(productsUpdated,null,3),'utf-8');
        res.redirect('/products')
        return res.render('productEdit', {
            categories,
            product : req.body,
        })
    },

    store : (req,res) => {
        let { title, price, id_category } = req.body;

        db.products.create({
            title : title.trim(),
            price : +price,
            id_category
        })
        .then(product => {
            
        })
        /* let errors = validationResult(req);
        if(errors.isEmpty()) {
            let { name, price, category } = req.body;
            let lastID = products[products.length - 1].id;
            let newProduct = {
            id: +lastID + 1,
            name: name.trim(),
            price: +price,
            category: +category,
            image: req.file ? req.file.originalname : 'Logo.png'
            };

            products.push(newProduct);

            fs.writeFileSync(
            path.resolve(__dirname, "..", "data", "products.json"),
            JSON.stringify(products, null, 3),
            "utf-8");
    
            return res.redirect('/products')
        } else {
            return res.render("productAdd", {
                categories,
                errors: errors.mapped(),
                old: req.body,
            })
        } */
    },
    
    cart : (req, res) => {
        return res.render('productCart', {
            products
        })
    },

    remove : (req, res) => {
        const { id } = req.params;
    
        const productFilter = products.filter(product => product.id !== +id);
    
        fs.writeFileSync(
          path.resolve(__dirname, "..", "data", "products.json"),
          JSON.stringify(productFilter, null, 3),
          "utf-8"
        );
    
        return res.redirect("/products");
    },
    
    question : (req, res) => res.render('specific-content/questionMark'),

    terms : (req, res) => res.render('specific-content/terms'),
}
