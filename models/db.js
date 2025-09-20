const Sequelize = require('sequelize');

const sequelize = new Sequelize('estacionamento', 'root', '1234', {
    host: "localhost",
    port: "3306",
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};