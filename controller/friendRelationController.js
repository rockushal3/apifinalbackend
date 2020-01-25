const friendrelation = require("../model/friendRelationModel")
const user = require("../model/userModel")

//function for friend request
exports.addpost =(req, res) => {
    const Post = new post(
        req.body)
        Post.save().then(function( ){
            res.send("request has been send")
        }).catch(function(e){
            res.send(e)
        })
    }

