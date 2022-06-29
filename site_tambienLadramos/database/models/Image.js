module.exports = (sequelize, dataTypes) => {

    const alias = "image";

    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED, 
            autoIncrement : true, 
            allowNull : false, 
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(50),
            allowNull : false
        },
        /* id_product : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        }, */

    }

    const config = {
        tableName : "image",
        timestamps : false,
        underscored : true
    }

    const Image = sequelize.define(alias,cols,config);
    
    return Image

}