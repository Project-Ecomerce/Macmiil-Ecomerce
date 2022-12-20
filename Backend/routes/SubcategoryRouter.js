const express = require('express');
const router = express.Router();
const subCatagory = require ('../controllers/Subcatagory')

// get all

router.get('/all',subCatagory.getAll)

// create 
router.post('/',subCatagory.createCategory)

// delete
// router.delete('/delete/:subatCagoryId',subCatagory.deletecat)

// delete
router.patch('/update/:subatCagoryId',subCatagory.updateCategory)

// get one 
// router.get('/getone/:subatCagoryId', subCatagory.getOne)

module.exports = router;