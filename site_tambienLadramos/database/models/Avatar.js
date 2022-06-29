module.exports = (sequelize, dataTypes) => {

    const alias = "avatar";

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
        /* id_user : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        }, */

    }

    const config = {
        tableName : "avatar",
        timestamps : false,
        underscored : true
    }

    const Avatar = sequelize.define(alias,cols,config);
    
    return Avatar
}