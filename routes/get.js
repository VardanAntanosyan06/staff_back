var express = require('express');
var router = express.Router();
const getControler = require('../controlers/getController')

/* GET home page. */

router.get('/AllAdmins',getControler.getAdmins);
router.get("/allUsers",getControler.getAllUsers)
router.get("/user",getControler.getUser)
router.get("/task",getControler.getTask)


module.exports = router;

