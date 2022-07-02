module.exports = (sequelize, dataTypes) => {

    const alias = "users";

    const cols = {
        id : {
            type : dataTypes.INTEGER, 
            autoIncrement : true, 
            allowNull : false, 
            primaryKey : true
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
            type : dataTypes.STRING(250),
            allowNull : false,
            unique : true
        },
        password : {
            type : dataTypes.STRING(250),
            allowNull : false
        },
        id_avatar : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        rol_id : {
            type : dataTypes.INTEGER, 
            allowNull : false, 
        }
    }

    const config = {
        tableName : "users",
        timestamps : false,
        underscored : true
    }

    const Users = sequelize.define(alias,cols,config);
    
    return Users

}