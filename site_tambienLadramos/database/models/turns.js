
module.exports = (sequelize, dataTypes) => {

    const alias = "Turn";

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        date : {
            type : dataTypes.DATE,
            allowNull : true
        },
        time : {
            type : dataTypes.TIME,
            allowNull : true,
        },
        price : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : true,
        }        
    }

    const config = {
        tableName : "turns",
        timestamps : false
    }

    const Turn = sequelize.define(alias,cols,config);
    Turn.associate = (modelos) => {
        Turn.belongsTo(modelos.Service, {
            as : 'services',
            foreignKey : 'id_service'
        })
        Turn.belongsTo(modelos.User, {
            as : 'users',
            foreignKey : 'id_user'
        })
}

    

        return Turn
}