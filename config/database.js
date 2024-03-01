const Sequelize = require('sequelize');

// Substitua 'database_name', 'username' e 'password' pelos seus dados de conexão
const sequelize = new Sequelize('fluxo_de_caixa', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql', // ou 'mysql', 'sqlite', 'mssql' dependendo do seu DB
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

module.exports = sequelize;
