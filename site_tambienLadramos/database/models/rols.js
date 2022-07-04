module.exports = (sequelize, dataTypes) => {

    const alias = "rols";

    const cols = {
        id : {
            type : dataTypes.INTEGER, 
            autoIncrement : true, 
            allowNull : false, 
            primaryKey : true
        },
        title : {
            type : dataTypes.STRING(20),
            allowNull : false
        },
    }

    const config = {
        tableName : "rols",
        timestamps : false,
        underscored : true
    }

    const Rols = sequelize.define(alias,cols,config);
    
    return Rols
}