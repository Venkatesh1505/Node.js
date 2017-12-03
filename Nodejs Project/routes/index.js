var express = require('express');
var router = express.Router();
var vd = require('../videodata');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cooking', videodata: vd });
});

module.exports = router;
