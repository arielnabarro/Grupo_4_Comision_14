module.exports = (sequelize, dataTypes) => {

    const alias = "products";

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
        descript : {
            type : dataTypes.STRING(250),
            allowNull : true,
            unique : true,
        },
        id_image : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false, 
        }, 

    }

    const config = {
        tableName : "products",
        timestamps : false
    }

    const Products = sequelize.define(alias,cols,config);
    
    return Products

}