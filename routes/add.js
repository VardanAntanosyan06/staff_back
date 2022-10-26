var express = require('express');
var router = express.Router();
const addControler = require('../controlers/addControler')

/* GET home page. */
router.post('/user',addControler.addUser);
router.post('/removeUser',addControler.removeUser);
router.post('/task',addControler.addTask);
router.post('/removeTask',addControler.removeTask);


module.exports = router;
