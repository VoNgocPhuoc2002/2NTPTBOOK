var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// router.get('/123', function(req, res, next) {
//   res.render('login', { title: 'nghia dep trai so 1' });
// });


module.exports = router;