const Payment = require('../models/Payment')



// method to make a payment

exports.create = async (req , res) => {

    const newPayment = new Payment(req.body)

    try {

        // create an order using razorpay orders api

        res.send('handle make payment')
        
    } catch (error) {
        res.status(500).json(error)
    }
}

// get all payments
