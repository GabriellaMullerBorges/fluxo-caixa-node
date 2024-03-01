const express = require('express');
const router = express.Router();
const Caixa = require('../models/caixa.js')

router.get('/', async function(req, res, next){
  try{
    const extrato = await Caixa.findAll();

    let receitas = 0; 
    let despesas = 0;

    for (const lancamentos of extrato){
      if(lancamentos.status === 1) {
        receitas += lancamentos.valor;
      } else if (lancamentos.status === 0){
        despesas += lancamentos.valor
      }
    }

    const valor_total = receitas - despesas;
    const title =  'Meu fluxo de Caixa'

    res.render('index', { title, valor_total, receitas, despesas, extrato})
  } catch (error){
    next(error)
  }
});

module.exports = router