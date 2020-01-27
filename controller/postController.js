const post = require("../model/postModel")
const user = require("../model/userModel")
var ObjectID = require('mongodb').ObjectID; 
//function for adding post
exports.addpost = (req, res) => {
    console.log(req.body.user_id)
    req.files.map(function (items) {
    
        const postdata = {
            image: items.filename,
            caption: req.body.caption,
            user_id: ObjectID(req.body.user_id)

        }
        

        const Post = new post(
            postdata)
        Post.save().then(function () {
            res.send("post has been added")
        }).catch(function (e) {
            res.send(e)
        })
    })
}

//function for getting post
exports.findpost = async (req, res) => {
    post.find().populate('user_id').then(function (findAllpost) {
        res.send(findAllpost).catch(function (e) {
            res.send(e)
        })
    })
}

//function for getting post by id
exports.findpostById = (req, res) => {
    post.findById(req.params._id)
        .then(function (postById) {
            res.send(postById).catch(function (e) {
                res.send(e)
            })
        })
}

//fuction for delete post by id 
exports.deletepostById = (req, res) => {
    post.findByIdAndDelete(req.params._id).then(function () {
        res.send("post Deleted").catch(function (e) {
            res.send(e)
        })
    })
}

//function for update post 
exports.updatepost = (req, res) => {
    post.findOneAndUpdate(req.params._id, req.body).then(function () {
        res.send("post Updated").catch(function (e) {
            res.send(e)
        })
    })
}


  

