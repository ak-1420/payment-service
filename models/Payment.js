const mongoose = require('mongoose')

const PaymentSchema =  new mongoose.Schema(
    {
      paymentId:{
          type:String,
          required:true
      },
      amount:{
          type:Number,
          required:true
      },
     workerId:{
         type:String,
         required:true
     },
     employerId:{
         type:String,
         required:true
     },
    },
    {timestamps:true}
)

module.exports = mongoose.model('Payment' , PaymentSchema)