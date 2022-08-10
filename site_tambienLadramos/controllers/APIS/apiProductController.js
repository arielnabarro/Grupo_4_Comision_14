const db = require("../../database/models");
const fs = require("fs");
const path = require("path");

module.exports = {
  list : (req, res) => {
    db.Product.findAll().then((products) => {
      return res.status(200).json({
        total: products.length,
        data: products,
        status: 200,
      });
    });
  },

  detail : (req, res) => {
    db.Product.findByPk(req.params.id)
    .then((product) => {
      return res.status(200).json({
        data: product,
        status: 200,
      });
    });
  },

  create : (req, res) => {
    db.Product.Create(req.body)
    return res.json(req.body)
    /* .then((product) => {
      return res.status(200).json({
        data: product,
        status: 200,
      });
    }); */
  },
};
