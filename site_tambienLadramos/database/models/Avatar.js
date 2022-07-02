module.exports = (sequelize, dataTypes) => {

    const alias = "avatars";

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
        id_user : {
            type : dataTypes.INTEGER,
            allowNull : false
        }, 

    }

    const config = {
        tableName : "avatars",
        timestamps : false,
        underscored : true
    }

    const Avatars = sequelize.define(alias,cols,config);
    
    return Avatars
}