const fs = require('fs');
const path = require('path');

const products = require('../data/products.json');
const categories = require('../data/categories.json');

const leerProductos = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/products.json'),'utf-8')); 

module.exports = {
    list : (req, res) => {

        const leerProductos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','products.json')));   
        const leerCategorias= JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','categories.json')));  

        leerProductos
        return res.render('products', {
            products,
            categories
        });
    },

    detail : (req, res) => {
        
        const { id } = req.params;
        const product = products.find((product) => product.id === +id);

        return res.render("productDetail", {
        product 
        });
    },

    search : (req, res) => {
        let {keyword} = req.query;
        let noSpaceKeyword = keyword.join("");
        const result = products.filter(product => product.name.toLowerCase().includes(noSpaceKeyword));

        let namesCategories = categories.map(category => {
            return {
                id : category.id,
                name : category.name
            }
        });

            return res.render('searchResult', {
                products : result,
                noSpaceKeyword,
                namesCategories
                }
            )
     },

    add : (req,res) => {

        return res.render('productAdd',{
            categories
        });
    },

    edit : (req,res) => {
    
        const { id } = req.params;
        const product = products.find((product) => product.id === +id);

        return res.render("productEdit", {
        categories,
        product,
        });
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
      let { name, price, category } = req.body;
      let lastID = products[products.length - 1].id;

      let newProduct = {
        id: +lastID + 1,
        name: name.trim(),
        price: +price,
        category: +category,
        image: req.file ? req.file.filename : "Logo.png"
      };

      products.push(newProduct);

      fs.writeFileSync(
        path.resolve(__dirname, "..", "data", "products.json"),
        JSON.stringify(products, null, 3),
        "utf-8");

        return res.redirect('/products')

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
    }
}
