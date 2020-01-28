const friendrelation = require("../model/friendRelationModel")

//function for friend request
exports.addfriend =(req, res) => {
    const friendadd = new friendrelation(
        req.body)
        friendadd.save().then(function( ){
            res.send("request has been send")
        }).catch(function(e){
            res.send(e)
        })
    }

