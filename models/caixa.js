const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js'); 

const Caixa = sequelize.define( 'Caixa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    }, 
    tipo: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false

    }
}, {
    timestamps: false,
    tableName: 'caixas',
});

module.exports = Caixa;
