const Product = require('../../database/models/Product')

module.exports = (sequelize, dataTypes) => {

    const alias = "images";

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
            references : {
                models : {
                    tableName : 'products'
                },
                key : 'id'
            }
        }, 
    }

    const config = {
        tableName : "images",
        timestamps : false,
        underscored : true
    }

    const Images = sequelize.define(alias,cols,config);

    let association = Images.associate = (modelos) => {
        Images.belongsTo(modelos.products, {
            as : 'products',
            foreignKey : 'id_product'
        })
        return association
    }
    return Images

}