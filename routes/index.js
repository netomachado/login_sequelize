const express = require('express');
const router = express.Router();
const UserController = require("../controllers/UserController");
const verificarUsuarioLogado = require('../middlewares/verificarUsuarioLogado');
const db = require("../models/index");

/* GET home page. */
router.get('/', function(req, res, next) {
  let usuario;
  
  if (req.session.usuario){
    usuario = req.session.usuario;
  };

  res.render('index', { title: 'Pagina Inicial', usuario});
});


router.get('/cadastro', function(req, res, next) {
  res.render('cadastro');
});

router.post('/cadastro', UserController.cadastrar);

router.get('/login', function(req, res, next) {
  const { session } = req;
  res.render('login');
});

router.post('/login', UserController.logar);


router.get('/dispositivos', verificarUsuarioLogado, function(req, res, next){
 
  res.render('dispositivos', { usuario: req.session.usuario });
});

router.get('/logout', function(req, res, next){
  req.session.destroy;
  res.render('logout')
});

module.exports = router;
