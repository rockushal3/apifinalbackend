const mongoose = require('mongoose')
const trip = mongoose.model('Trip', {    
    user_id :{
        type: String,
        require:true,
        trim: true
    },   
     trip_name: {
        type: String,
        require:true,
        trim: true
    },
    description: {
        type: String,
        require:true,
        trim: true
    },
    
    date:{
        type: Date
    },
    
    
  })

  module.exports = trip