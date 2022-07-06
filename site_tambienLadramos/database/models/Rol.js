module.exports = (sequelize, dataTypes) => {

    const alias = "Rol";

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
        }
    }

    const config = {
        tableName : "rols",
        timestamps : false,
        underscored : true
    }

    const Rol = sequelize.define(alias,cols,config);

    Rol.associate = (modelos) => {
        Rol.hasMany(modelos.User, {
            as : 'users',
            foreignKey : 'id_rol'
        })
    }
    return Rol
}
    