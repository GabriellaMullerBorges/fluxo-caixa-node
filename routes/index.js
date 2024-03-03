const express = require('express');
const router = express.Router();
const Caixa = require('../models/caixa.js')

router.get('/', async function(req, res, next){
  try{
    const extrato = await Caixa.findAll();

    let receitas = 0; 
    let despesas = 0;

    for (const lancamento of extrato){
      if(lancamento.status === 1) {
        receitas += lancamento.valor;
      } else if (lancamento.status === 0){
        despesas += lancamento.valor
      }
    }

    const valor_total = receitas - despesas;
    const title =  'Fluxo de Caixa'

    res.render('index', { title, valor_total, receitas, despesas, extrato: extrato, 
      formatarStatus: (status) => {return status ===1 ? "Receita" : "Despesa"}})
  } catch (error){
    next(error)
  }
});


router.get('/excluir/:id', async function(req, res, next) {
  try {
    const id = req.params.id;

    const lancamento = await Caixa.findByPk(Number(id));

    if(!lancamento){
      return res.redirect('/');
    }

    await lancamento.destroy();
    res.redirect('/');
  }
  catch (error){
    next(error)
  }
  });

  router.get('/adicionar', async function(req, res, next) {
    res.render('adicionar')})

    router.post('/cadastrar', async function(req, res, next) {
      try {
        const { tipo, valor, status } = req.body;
    
        // Aqui, você cria um novo registro no banco de dados com os dados recebidos do formulário
        await Caixa.create({ tipo, valor, status });
    
        // Redireciona para a página inicial (ou outra página de sua escolha) após o cadastro
        res.redirect('/');
      } catch (error) {
        next(error); // Passa o erro para o manipulador de erros do Express se algo der errado
      }
    });
    
module.exports = router