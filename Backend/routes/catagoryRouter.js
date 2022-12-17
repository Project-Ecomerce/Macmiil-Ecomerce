const express = require('express');
const router = express.Router();
const Catagory = require ('../controllers/catagoryControllers');
const protect = require('../middlewares/auth');

// get all

router.get('/all',Catagory.getAll)

// create 
router.post('/',protect,Catagory.createCategory)

// delete
router.delete('/delete/:CagoryId',Catagory.deletecat)

// delete
router.patch('/update/:CagoryId',Catagory.updateCategory)

// get one 
// router.get('/getone/:subatCagoryId', subCatagory.getOne)

module.exports = router;