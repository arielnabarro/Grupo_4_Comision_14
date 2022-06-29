module.exports = (sequelize, dataTypes) => {

    const alias = "user";

    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED, 
            autoIncrement : true, 
            allowNull : false, 
            primaryKey : true
        },
        rol : {
            type : dataTypes.STRING(20), 
            allowNull : false, 
        },
        name : {
            type : dataTypes.STRING(50),
            allowNull : false
        },
        last_name : {
            type : dataTypes.STRING(100),
            allowNull : false, 
        },
        email : {
            type : dataTypes.STRING(100),
            allowNull : false,
            unique : true
        },
        password : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        /* id_avatar : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        }, */

    }

    const config = {
        tableName : "user",
        timestamps : false,
        underscored : true
    }

    const User = sequelize.define(alias,cols,config);
    
    return User

}