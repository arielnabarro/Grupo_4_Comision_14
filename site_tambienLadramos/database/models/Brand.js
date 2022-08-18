
module.exports = (sequelize, dataTypes) => {

    const alias = "Brand";

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        title : {
            type : dataTypes.STRING(50),
            allowNull : false
        }
    }

    const config = {
        tableName : "brands",
        timestamps : false
    }

    const Brand = sequelize.define(alias,cols,config);

    Brand.associate = (modelos) => {
        Brand.hasMany(modelos.Product, {
                as : 'products',
                foreignKey : 'id_brand'
                })
            }

        return Brand
}