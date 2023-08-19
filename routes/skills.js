var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('skills/show');
});

module.exports = router;


var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

///all actual paths start with /todos
////this is going to be get request to /todos
router.get('/', skillsCtrl.index);

//get certain id

router.get('/:name', skillsCtrl.show)


module.exports = router;
