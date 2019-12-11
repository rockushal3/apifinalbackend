const mongoose = require('mongoose');
const checklist = mongoose.model('checklist', {    
    trip_id :{
        type: String,
        require:true,
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