
module.exports = (sequelize, dataTypes) => {

    const alias = "Product";

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
        },
        id_category : {
            type : dataTypes.INTEGER,
            allowNull : false
        }
    }

    const config = {
        tableName : "products",
        timestamps : false
    }

    const Products = sequelize.define(alias,cols,config);

    Products.associate = (modelos) => {
        Products.hasMany(modelos.Image, {
            as : 'images',
            foreignKey : 'id_product'
        })
        Products.belongsTo(modelos.Category, {
            as : 'category',
            foreignKey : 'id_category'
        })
    }

        return Products
}