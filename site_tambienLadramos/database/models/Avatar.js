module.exports = (sequelize, dataTypes) => {

    const alias = "Avatar";

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
        }
    }

    const config = {
        tableName : "avatars",
        timestamps : false,
        underscored : true
    }

    const Avatar = sequelize.define(alias,cols,config);

    Avatar.associate = (modelos) => {
        Avatar.hasOne(modelos.User, {
            as : 'users',
            foreignKey : 'id_avatar'
        })
    }
    return Avatar
}