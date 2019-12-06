const mongoose = require('mongoose');
const checklist = mongoose.model('checklist', {     
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