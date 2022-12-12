const express = require('express');
const router = express.Router();
const product = require ('../controllers/productControllers')

// get all

router.get('/all',product.getAll)

// create 
router.post('/n',product.create)

// delete
router.delete('/delete/:ProductId',product.deleteproducts)

// get one 
router.get('/getone/:ProductId', product.getOne)

module.exports = router;