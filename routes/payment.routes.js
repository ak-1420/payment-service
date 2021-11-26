const express = require('express')
const router = express.Router()
const paymentController =  require('../controllers/payment.controller')


// create new payment
router.post('/' , paymentController.create);

// fetch all payments
router.get('/' , paymentController.findAll);

// fetch payment by id
router.get('/:id',paymentController.findById)

module.exports = router