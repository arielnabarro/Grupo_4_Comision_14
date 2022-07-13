const Product = require('../../database/models/Product')

module.exports = (sequelize, dataTypes) => {

    const alias = "Image";

    const cols = {
        id : {
            type : dataTypes.INTEGER, 
            autoIncrement : true, 
            allowNull : false, 
            primaryKey : true
        },
        name : {
            type : dataTypes.TEXT,
            allowNull : false
        },
        id_product : {
            type : dataTypes.INTEGER,
            allowNull : false,
            onDelete: 'cascade'
        }
    }

    const config = {
        tableName : "images",
        timestamps : false,
        underscored : true
    }

    const Image = sequelize.define(alias,cols,config);

    Image.associate = (modelos) => {
         Image.belongsTo(modelos.Product, {
            as : 'products',
            foreignKey : 'id_product'
        })
    
    }
    return Image

}