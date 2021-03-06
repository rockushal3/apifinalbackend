const mongoose = require('mongoose') // database connection

//attributes of database and create model
const trip = mongoose.model('Trip', {    
    user_id :{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
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
        type: String,
        trim: true
    },
    
    
  })

  module.exports = trip