
module.exports = (sequelize, dataTypes) => {

    const alias = "Cat_Breed";

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
        id_category : {
            type : dataTypes.INTEGER,
            allowNull : true
        }
    }

    const config = {
        tableName : "cat_breeds",
        timestamps : false
    }

    const Cat_Breed = sequelize.define(alias,cols,config);

    Cat_Breed.associate = (modelos) => {
        Cat_Breed.belongsTo(modelos.Category, {
                as : 'category',
                foreignKey : 'id_category'
                })
            
        Cat_Breed.hasMany(modelos.Pet, {
                as : 'pets',
                foreignKey : 'id_breed_cat'
                })   
        }
        return Cat_Breed
}