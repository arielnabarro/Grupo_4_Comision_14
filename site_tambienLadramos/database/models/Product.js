
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
        quantity : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        weight : {
            type : dataTypes.FLOAT,
            allowNull : false
        },
        id_brand : {
            type : dataTypes.INTEGER,
            allowNull : true
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

    const Product = sequelize.define(alias,cols,config);

    Product.associate = (modelos) => {
        Product.hasMany(modelos.Image, {
            as : 'images',
            foreignKey : 'id_product'
        })
        
    Product.belongsTo(modelos.Category, {
            as : 'category',
            foreignKey : 'id_category'
        })

    Product.belongsTo(modelos.Brand, {
            as : 'brands',
            foreignKey : 'id_brand'
        })
    }
    

        return Product
}