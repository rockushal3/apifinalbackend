const mongoose = require('mongoose')// database connection

//attributes of database and create model
const friend = mongoose.model('friendRelation', {   
user_id_1 :{
    type: String,
    require:true,
    trim: true
},  
user_id_2 :{
    type: String,
    require:true,
    trim: true
},
Status :{
    type: String,
    require:true,
    trim: true
},   
})

module.exports = friend