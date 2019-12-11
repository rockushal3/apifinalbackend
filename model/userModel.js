const mongoose = require('mongoose');
const user = mongoose.model('User', {     
    name: {
        type: String,
        require:true,
        trin: true
    },
    address:{
            type: String,
            require:true,
            trim: true
        },  
    phone :{
            type: String,
            require:true,
            trim: true
        },
    gender :{
            type: String,
            require:true,
            trim: true
        },     
    dob :{
            type: String,
            require:true,
            trim: true
        },
    email :{
            type: String,
            require:true,
            trim: true
        },  
    password :{
            type: String,
            require:true,
            trim: true
        },       
    
  });

  module.exports = user