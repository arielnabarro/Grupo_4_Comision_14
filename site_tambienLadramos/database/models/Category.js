module.exports = (sequelize, dataTypes) => {
   
    const alias = "Category";

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
        tableName : "categories",
        timestamps : false,
        underscored : true
    }

    const Category = sequelize.define(alias,cols,config);

    Category.associate = (modelos) => {
        Category.hasMany(modelos.Product, {
            as : 'products',
            foreignKey : 'id_category'
            }) 
        Category.hasMany(modelos.Defaultpic, {
            as : 'defaultpics',
            foreignKey : 'id_category'
            })  
        Category.hasMany(modelos.Dog_Breed, {
            as : 'dog_breeds',
            foreignKey : 'id_category'
            })   
        Category.hasMany(modelos.Cat_Breed, {
            as : 'cat_breeds',
            foreignKey : 'id_category'
            })          
    }   
        
        return Category
}
    
   

