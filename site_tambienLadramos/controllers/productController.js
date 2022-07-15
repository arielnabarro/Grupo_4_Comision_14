const { validationResult } = require("express-validator");
const db = require("../database/models");
const fs = require("fs");
const path = require("path");

module.exports = {
  list: (req, res) => {
    db.Product.findAll({
      include: ["images", "category"],
    })
      .then((product) => {
        return res.render("products", {
          product,
        });
      })
      .catch((error) => console.log(error));
  },

  tableList: (req, res) => {
    db.Product.findAll({
      include: ["images", "category"],
    })
      .then((product) => {
        return res.render("productList", {
          product,
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
    category = db.Category.findAll();
    product = db.Product.findAll({
      include: ["images"],
    });
    Promise.all([product, category])
      .then(([product, categories]) => {
        return res.render("productAdd", {
          product,
          categories,
        });
      })
      .catch((error) => console.log(error));
  },

  store: (req, res) => {
    const { title, price, descript, id_category } = req.body;

    db.Product.create({
      title,
      price: +price,
      descript,
      id_category: id_category,
    })
      .then((product) => {
        if (req.file)
          db.Image.create({
            name: req.file ? req.file.filename : "Logo.png",
            id_product: product.id,
          });
        res.redirect("/products");
      })
      .catch((error) => console.log(error));
  },

  edit: (req, res) => {
    let product = db.Product.findByPk(req.params.id, {
      include: [{ association: "images" }],
    });

    let categories = db.Category.findAll();

    Promise.all([product, categories])
      .then(([product, categories]) => {
        return res.render("productEdit", {
          product,
          categories,
        });
      })
      .catch((error) => console.log(error));
  },

  update: (req, res) => {
    let errors = validationResult(req);
    const { title, price, id_category } = req.body;
    if (errors.isEmpty()) {
      let product = db.Product.findByPk(req.params.id);
      db.Product.update(
        {
          title: title,
          price: +price,
          image: req.file ? req.file.filename : product.image,
          category: +id_category,
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
                  file: req.file.filename,
                },
                {
                  where: {
                    id_product: req.params.id,
                    primary: true,
                  },
                }
              );
            } catch (error) {
              console.log(error);
            }
          }
          return res.redirect("/products");
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
