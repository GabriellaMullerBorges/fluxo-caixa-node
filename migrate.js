const sequelize = require('./config/database.js'); 
const Caixa = require('./models/caixa.js')

sequelize.sync()
  .then(() => {
    console.log('Tabela com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível criar a tabela:', err);
  });