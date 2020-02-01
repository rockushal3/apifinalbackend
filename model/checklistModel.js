const mongoose = require('mongoose') // database connection

//attributes of database and create model
const checklist = mongoose.model('checklist', {    
    trip_id :{
        type: mongoose.Schema.ObjectId,
        ref: 'Trip',
        trim: true
    },   
     checklistname: {
        type: String,
        require:true,
        trim: true
    },
    
    status: {
        type: Boolean,
        require:true,
    }
  });

  module.exports = checklist