module.exports = (sequelize, dataTypes) => {

    const alias = "product";

    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        title : {
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        price : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        },
        description : {
            type : dataTypes.STRING(250),
            allowNull : true,
            unique : true,
        },
        /* id_image : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false, 
        }, */

    }

    const config = {
        tableName : "product",
        timestamps : false,
        underscored : true
    }

    const Product = sequelize.define(alias,cols,config);
    
    return Product

}