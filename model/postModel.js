const mongoose = require('mongoose') // database connection

//attributes of database and create model
var now = new Date();
const post = mongoose.model('Post', {   
    user_id :{
        type: String,
        trim: true
    },  
     caption: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    date:{
        type : Date, 
        default: now 
    }
  
    
  });

  module.exports = post