const Product = require('../../database/models/Product')

module.exports = (sequelize, dataTypes) => {

    const alias = "Defaultpic";

    const cols = {
        id : {
            type : dataTypes.INTEGER, 
            autoIncrement : true, 
            allowNull : false, 
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        id_category : {
            type : dataTypes.STRING(100),
            allowNull : false
        }
    }

    const config = {
        tableName : "defaultpics",
        timestamps : false,
        underscored : true
    }

    const Defaultpic = sequelize.define(alias,cols,config);

    Defaultpic.associate = (modelos) => {
        Defaultpic.belongsTo(modelos.Category, {
           as : 'category',
           foreignKey : 'id_category'
       })
   }

    return Defaultpic
}