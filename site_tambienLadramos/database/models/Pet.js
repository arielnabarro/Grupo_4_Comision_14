module.exports = (sequelize, dataTypes) => {
   
    const alias = "Pet";

    const cols = {
        id : {
            type : dataTypes.INTEGER, 
            autoIncrement : true, 
            allowNull : false, 
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(50),
            allowNull : true
        },
        age : {
            type : dataTypes.INTEGER, 
            allowNull : true
        },
        weight : {
            type : dataTypes.INTEGER, 
            allowNull : true
        },
        id_user : {
            type : dataTypes.INTEGER, 
            allowNull : true
        },
        id_breed_dog : {
            type : dataTypes.INTEGER, 
            allowNull : true
        },
        id_breed_cat : {
            type : dataTypes.INTEGER, 
            allowNull : true
        }
    }

    const config = {
        tableName : "pets",
        timestamps : false,
        underscored : true
    }

    const Pet = sequelize.define(alias,cols,config);

    Pet.associate = (modelos) => {
        Pet.belongsTo(modelos.User, {
            as : 'users',
            foreignKey : 'id_user'
            })
        Pet.belongsTo(modelos.Dog_Breed, {
            as : 'dog_breeds',
            foreignKey : 'id_breed_dog'
            })   
        Pet.belongsTo(modelos.Cat_Breed, {
            as : 'cat_breeds',
            foreignKey : 'id_breed_cat'
            })  
              
    }   
        
        return Pet
}
    
   
