
module.exports = (sequelize, dataTypes) => {

    const alias = "Service";

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        title : {
            type : dataTypes.STRING(50),
            allowNull : true
        },
        descript : {
            type : dataTypes.STRING(250),
            allowNull : true,
        },
        
    }

    const config = {
        tableName : "services",
        timestamps : false
    }

    const Service = sequelize.define(alias,cols,config);

    Service.associate = (modelos) => {
    Service.belongsToMany(modelos.User, {
        as : 'users',
        through : 'turns',
        foreignKey : 'id_service',
        timestamps : false
    })   
} 

        return Service
}