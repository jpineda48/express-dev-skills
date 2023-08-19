var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills')
const skills = require('../models/skills')




/* GET home page. */
router.get('/', skillsCtrl.index)
// router.get('/', skillsCtrl.index);

module.exports = router;
