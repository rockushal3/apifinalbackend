const mongoose = require('mongoose');
const user = mongoose.model('User', {     
    Name: {
        type: String,
        require:true,
        trin: true
    },
    completed:{
        type: Boolean,
        default: false
    }
    
  });

  module.exports = user