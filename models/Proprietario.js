const db = require('./db');

const Proprietario = db.sequelize.define('proprietario', {
    id_proprietario: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }, 
    nome: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    cpf: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [11, 11]
        }
    }
}, { 
    freezeTableName: true,
    tableName: 'proprietario'
});

Proprietario.sync({force: true})
    .then(() => {
        console.log('Tabela Proprietario criada/sincronizada com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao criar/sincronizar tabela Proprietario:', error);
    });

module.exports = Proprietario;