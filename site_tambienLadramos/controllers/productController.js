const { validationResult } = require("express-validator");
const db = require('../database/models');

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
        db.Category.findAll()
            .then(categories => {
                return res.render('productAdd', {
                    categories
                })
        })
        .catch(error => console.log(error))
    },

    edit : (req,res) => {

        let product = db.Product.findByPk(req.params.id, {
            include : [{association : 'images'}]
        });

        let categories = db.Category.findAll();

        Promise.all([product, categories])
            .then(([product, categories]) => {
                return res.render("productEdit", {
                    product,
                    categories
                    });
            })
            .catch(error => console.log(error))	
    },

    update : (req, res) => {
        let errors = validationResult(req);
        const { title, price, id_category } = req.body;
        if(errors.isEmpty()){
            let product = db.Product.findByPk(req.params.id);
            db.Product.update({
                title : title,
                price : +price,
                image : req.file ? req.file.filename : product.image,
                category : +id_category,
            },
            {
                where : {
                    id : req.params.id
                }
            })

        .then( () => {
            if(req.file){
                try {
                    db.Image.update(
                        {
                            file : req.file.filename
                        },
                        {
                            where : {
                                id_product : req.params.id,
                                primary : true
                            }
                        }
                    )
                } catch (error) {
                    console.log(error)
                }
            }
            return res.redirect('/products');
        }).catch(error => console.log(error))
        }
    },

    store : (req,res) => {
        const { title, price, id_category } = req.body;

        db.Product.create({
            title : title,
            price : +price,
            id_category : id_category
        })
        .then(product => {
            if(req.file.length > 0) {
                let images = req.file.map(({filename}, i) => {
                    let image = {
                        file : filename,
                        id_product : product.id,
                        primary : i === 0 ? 1 : 0
                    }
                    return image
                })
                db.Image.bulkCreate(images, {
                    validate : true
                }).then((result) => console.log(result))
            }
            return res.redirect('/products')
        })
        .catch(error => console.log(error))
    },
    
    cart : (req, res) => {
        return res.render('productCart', {
            products
        })
    },

    remove : (req, res) => {
        db.Product.destroy({
            where : {
                id : req.params.id
            }
        })
            .then(() => {
                return res.redirect("/products");
        })
        .catch(error => console.log(error))        
    },
    
    question : (req, res) => res.render('specific-content/questionMark'),

    terms : (req, res) => res.render('specific-content/terms'),
}
