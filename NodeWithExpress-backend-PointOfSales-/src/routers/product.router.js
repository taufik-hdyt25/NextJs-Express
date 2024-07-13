const express = require('express');
const conn = require('../configs/db');
const router = express.Router()
const productController = require('../controllers/prouduct.controller')
const auth = require('../helpers/auth');

router.post('/createproduct',auth.verify, productController.create)
router.get('/',auth.verify, productController.getAllProduct)
router.get('/:id',auth.verify, productController.getProductById)
router.put('/:id',auth.verify, productController.updateProduct)
router.delete('/:id',auth.verify, productController.deleteProduct)

module.exports = router