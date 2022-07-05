'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    class Category extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
          // define association here
          Category.hasMany(models.Product,{
            as : 'products',
            foreignKey : 'id_category'
          });
        }
    }

    const alias = "categories";

    const cols = {
        id : {
            type : dataTypes.INTEGER, 
            autoIncrement : true, 
            allowNull : false, 
            primaryKey : true
        },
        title : {
            type : dataTypes.STRING(50),
            allowNull : false
        }
    }

    const config = {
        tableName : "categories",
        timestamps : false,
        underscored : true
    }

    const Categories = sequelize.define(alias,cols,config);
    
    return Categories

}