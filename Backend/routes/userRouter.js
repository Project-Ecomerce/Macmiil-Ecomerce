const express = require('express');
const router = express.Router();
const user = require ('../controllers/usersControllers')

// get all

router.get('/all',user.getAll)

 // create 
router.post('/',user.create)

// get one 
router.get('/getone/:userId', user.getOne)

// delete
router.delete('/delete/:userId', user.deleteuser)


module.exports = router;