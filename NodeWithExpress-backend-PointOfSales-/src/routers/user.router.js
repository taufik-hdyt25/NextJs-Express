const express = require('express');
const conn = require('../configs/db');

const router = express.Router()
const userController = require('../controllers/user.controller');
const auth = require('../helpers/auth');

router.post('/login', userController.login)
router.post('/register', userController.register)


router.get('/',auth.verify, userController.getAlluser)
router.get('/:id',auth.verify, userController.getUserById)
router.delete('/:id',auth.verify, userController.deleteUser)
router.put('/:id',auth.verify, userController.updateUser)


module.exports = router