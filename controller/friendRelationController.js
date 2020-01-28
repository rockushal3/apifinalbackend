const friendrelation = require("../model/friendRelationModel")
var ObjectID = require('mongodb').ObjectID; 
//function for friend request
exports.addfriend =(req, res) => {
    console.log(req.body)
    const friendadd = new friendrelation({
        user_id_1:ObjectID(req.body.user_id_1),
        user_id_2:ObjectID(req.body.user_id_2),
        Status: "Requested"
        
    })
    
        friendadd.save().then(function( ){
            res.send("request has been send")
        }).catch(function(e){
            res.send(e)
        })
    }

    //function for getting request from another user
exports.getrequest =(req, res) => {

    friendrelation.find({user_id_2:req.params._id,Status:"Requested"}).populate('user_id_1',"user_id_2").then(function(getfriend){
            res.send(getfriend)
        }).catch(function(e){
            res.send(e)
        })
    }

   