var express = require('express');
var router = express.Router();
const loginControler = require('../controlers/loginControler')

/* GET home page. */
router.post('/',loginControler.login);



module.exports = router;
