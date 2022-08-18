module.exports = (sequelize, dataTypes) => {

    const alias = "User";

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
        avatar : {
            type : dataTypes.STRING(250), 
            allowNull : false, 
        },
        id_rol : {
            type : dataTypes.INTEGER, 
            allowNull : false,
        }
    }

    const config = {
        tableName : "users",
        timestamps : false,
        underscored : true
    }

    const User = sequelize.define(alias,cols,config);
    
    User.associate = (modelos) => {
        User.belongsTo(modelos.Rol, {
            as : 'rols',
            foreignKey : 'id_rol'
        })
    User.hasMany(modelos.Pet, {
            as : 'pets',
            foreignKey : 'id_user'
        })
    User.belongsToMany(modelos.Service, {
            as : 'services',
            through : 'turns',
            foreignKey : 'id_user',
            timestamps : false
        }) 
    }
    return User

}