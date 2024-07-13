const express = require('express');
const conn = require('../configs/db');
const orderController = require('../controllers/order.controller');
const router = express.Router()
const auth = require('../helpers/auth');

router.post('/',auth.verify, orderController.createOrder)

module.exports = router