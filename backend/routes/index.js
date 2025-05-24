var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//get list of destinations
router.get('/destinations',function(req,res, next){

})

module.exports = router;
