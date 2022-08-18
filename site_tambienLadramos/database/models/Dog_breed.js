
module.exports = (sequelize, dataTypes) => {

    const alias = "Dog_Breed";

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
        size : {
            type : dataTypes.STRING(20),
            allowNull : false
        },
        id_category : {
            type : dataTypes.INTEGER,
            allowNull : true
        }
    }

    const config = {
        tableName : "dog_breeds",
        timestamps : false
    }

    const Dog_Breed = sequelize.define(alias,cols,config);

    Dog_Breed.associate = (modelos) => {
        Dog_Breed.belongsTo(modelos.Category, {
                as : 'category',
                foreignKey : 'id_category'
                })
        Dog_Breed.hasMany(modelos.Pet, {
                as : 'pets',
                foreignKey : 'id_breed_dog'
                })  
            }

        return Dog_Breed
}