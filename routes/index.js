var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ 
  	title: 'Ballons Fiesta' 
  });
});

router.get('/cotizar', function(req, res){
  res.render('cotizar', {
    title: 'Cotización'
  });
});

router.get('/nosotros', function(req, res){
  res.render('nosotros', {
    title: 'Nosotros'
  });
});

router.get('/servicios', function(req, res){
  res.render('servicios', {
    title: 'Servicios'
  });
});

router.get('/galeria', function(req, res){
  res.render('galeria', {
    title: 'galeria'
  });
});

router.get('/test', function(req, res){
  res.render('test', {
    title: 'test'
  });
});

module.exports = router;
