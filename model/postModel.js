const mongoose = require('mongoose');
const post = mongoose.model('Post', {   
    user_id :{
        type: String,
        require:true,
        trim: true
    },  
     caption: {
        type: String,
        require:true,
        trim: true
    },
    image: {
        type: String,
        require:true,
        trim: true
    },
    date:{
        type: String,
    },
    time:{
        type:String
    }
    
  });

  module.exports = post