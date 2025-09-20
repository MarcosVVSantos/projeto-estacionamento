const { DataTypes } = require('sequelize');
const db = require('./db');

const Veiculo = db.sequelize.define('veiculo', {
    id_veiculo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    placa: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            is: /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/i
        }
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1900,
            max: new Date().getFullYear() + 1
        }
    },
    mensalidade: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0
        }
    },
    fk_proprietario: {
        type: DataTypes.INTEGER,
        references: {
            model: 'proprietario',
            key: 'id_proprietario'
        },
        onDelete: 'CASCADE',
        allowNull: false,
    }
}, { 
    freezeTableName: true,
    tableName: 'veiculo',
    timestamps: false
});

Veiculo.sync({ force: true })
  .then(() => {
    console.log('Tabela Veiculo criada/sincronizada com sucesso!');
  })
  .catch(error => {
    console.error('Erro ao criar/sincronizar tabela Veiculo:', error);
  });

module.exports = Veiculo;