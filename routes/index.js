var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("req id: ", req.id);
  console.log("headers ", req.headers['x-auth'])
  res.render('index', { title: 'Express' });
});

module.exports = router;
