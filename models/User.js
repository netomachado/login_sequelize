

module.exports = (sequelize, DataTypes)=> {
    const users = sequelize.define( 'User', {
        nome:{type:DataTypes.STRING,
            allowNull:false
        },
        email: {type:DataTypes.STRING, 
            allowNull:false
        },
        senha_crypto: {type: DataTypes.STRING,
            allowNull:false
        },
    }, {
        tablename: "users",
        timestamps: false
    });
    return users;
};
