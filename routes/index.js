var express = require('express');
var router = express.Router();

const quizController = require('../controllers/quiz.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET credits page. */
router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'Credits' });
});

/* GET quizzes page. */ 
router.get('/quizzes', quizController.index);

module.exports = router;
