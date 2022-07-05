
module.exports = (sequelize, dataTypes) => {

    const alias = "products";

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        title : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        price : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        },
        descript : {
            type : dataTypes.STRING(250),
            allowNull : true,
        }
    }

    const config = {
        tableName : "products",
        timestamps : false
    }

    const Products = sequelize.define(alias,cols,config);

    let association = Products.associate = (modelos) => {
        Products.hasMany(modelos.images, {
            as : 'images',
            foreignKey : 'id_product'
        })
        return association
    }
    
    return Products

}