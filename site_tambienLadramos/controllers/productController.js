const { validationResult } = require("express-validator");
const db = require("../database/models");
const fs = require("fs");
const path = require("path");
const Product = require("../database/models/Product");


module.exports = {
  list: (req, res) => {
    let page = req.params.id;
    db.Product.findAll({
      include: ["images", "category", "brands"]
    })
      .then((product) => {
        return res.render("products", {
          product,
        });
      })
      .catch((error) => console.log(error));
  },

  tableList: (req, res) => {
    let product = db.Product.findAll({
      include: ["images", "category"]
    });
    let category = db.Category.findAll({
      attributes : ['title']
    });

    Promise.all([product, category])
      .then(([product, category]) => {
        return res.render("productList", {
          product,
          category
        });
      })
      .catch((error) => console.log(error));
  },

  detail: (req, res) => {
    db.Product.findByPk(req.params.id, {
      include: ["images", "category"],
    })
      .then((product) => {
        return res.render("productDetail", {
          product,
        });
      })
      .catch((error) => console.log(error));
  },

  search: (req, res) => {
    let { keyword } = req.query;
    let noSpaceKeyword = keyword.join("");
    db.Product.findAll({
      include: ["images"],
    })
      .then((product) => {
        let result = product.filter((producto) =>
          producto.title.toLowerCase().includes(noSpaceKeyword)
        );
        return res.render("searchResult", {
          result,
          noSpaceKeyword,
        });
      })
      .catch((error) => console.log(error));
  },

  add: (req, res) => {
    let category = db.Category.findAll();
    let product = db.Product.findAll({
      include: ["brands"],
    });
    let brand = db.Brand.findAll();
    Promise.all([product, category, brand])
      .then(([product, categories, brands]) => {
        return res.render("productAdd", {
          product,
          categories,
          brands
        });
      })
      .catch((error) => console.log(error));
  },

  store: (req, res) => {

    const errores = validationResult(req)
    const { title, price, descript, quantity, id_category, id_brand, weight } = req.body;
    if (errores.isEmpty()) {
      
      db.Product.create({
      title : title,
      id_brand : +id_brand,
      price: +price,
      weight : +weight,
      quantity : +quantity,
      descript : descript,
      id_category: +id_category,
      
    })
      .then((product) => {
        if (req.file)
          db.Image.create({
            name: req.file.filename,
            id_product: product.id,
          })
          res.redirect("/products")
      }) 
      .catch((error) => console.log(error))
    } else {
      let errors = errores.mapped()
      if (req.fileValidationError) {
        errors = {
            ...errors,
            image: {
                msg: req.fileValidationError,
            },
        };
    }
      let category = db.Category.findAll();
      let product = db.Product.findAll({
        include: ["brands"],
      });
      let brand = db.Brand.findAll();
      Promise.all([product, category, brand])
        .then(([product, categories, brands]) => {
          return res.render("productAdd", {
            product,
            categories,
            brands,
            old : req.body,
            errors
          });
        })
        .catch((error) => console.log(error));    }

    
  },

  edit: (req, res) => {
    let product = db.Product.findByPk(req.params.id, {
      include : ["images", "category", 'brands']       
    });

    let category = db.Category.findAll();

    let brand = db.Brand.findAll();

    Promise.all([product, category, brand])
      .then(([product, category, brand]) => {
        return res.render("productEdit", {
          product,
          category,
          brand
        });
      })
      .catch((error) => console.log(error));
  },

  update: (req, res) => {
    let errors = validationResult(req);
    const { title, price, category, descript, quantity, weight} = req.body;
    if (errors.isEmpty()) {
      db.Product.findByPk(req.params.id);
      db.Product.update(
        {
          title: title,
          price: +price,
          weight : +weight,
          id_category: +category,
          descript : descript,
          quantity : +quantity,
          
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
        .then(() => {
          if (req.file) {
            try {
              db.Image.update(
                {
                  name: req.file.filename,
                },
                {
                  where: {
                    id_product: req.params.id
                  },
                }
              );
            } catch (error) {
              console.log(error);
            }
          }
          return res.redirect("/products/tableList");
        })
        .catch((error) => console.log(error)); 
    }
  },

  cart: (req, res) => {
    let product = db.Product.findAll({
      include: [{ association: "images" }],
    });

    let categories = db.Category.findAll();

    Promise.all([product, categories])
      .then(([product, categories]) => {
        return res.render("productCart", {
          product,
          categories,
        });
      })
      .catch((error) => console.log(error));
  },

  destroy: (req, res) => {
    let image = db.Image.findOne({
      where: {
        id_product: req.params.id,
      },
    }).then(() => {
      if (
        fs.existsSync(
          path.resolve(
            __dirname,
            "../public/images/Alimento-balanceado/" + image.name
          )
        )
      ) {
        fs.unlinkSync(
          path.resolve(
            __dirname,
            "../public/images/Alimento-balanceado/" + image.name
          )
        );
      }
    });
    db.Product.destroy({
      where: {
        id: req.params.id,
      },
      paranoid: true,

      force: true,
    })
      .then(() => {
        return res.redirect("/products");
      })
      .catch((error) => console.log(error));
  },

  question: (req, res) => res.render("specific-content/questionMark"),

  terms: (req, res) => res.render("specific-content/terms"),
};
