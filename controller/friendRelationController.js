const friendrelation = require("../model/friendRelationModel")
var ObjectID = require('mongodb').ObjectID;
//function for friend request
exports.addfriend = (req, res) => {
    console.log(req.body)
    const friendadd = new friendrelation({
        user_id_1: ObjectID(req.body.user_id_1),
        user_id_2: ObjectID(req.body.user_id_2),
        Status: "Requested"

    })
    friendadd.save().then(function () {
        res.send("request has been send")
    }).catch(function (e) {
        res.send(e)
    })
}

//function for getting request from another user
exports.getrequest = (req, res) => {

    friendrelation.find({ user_id_2: req.params._id, Status: "Requested" }).populate('user_id_1').populate('user_id_2').then(function (getfriend) {
        res.send(getfriend)
    }).catch(function (e) {
        res.send(e)
    })
}

//function for get all friend list
exports.getAllFriends = (req, res) => {

    friendrelation.find({ $or: [{ user_id_2: req.params._id, Status: "Friends" }, { user_id_1: req.params._id, Status: "Friends" }] }).populate('user_id_1').populate('user_id_2').then(function (getfriend) {
        res.send(getfriend)
    }).catch(function (e) {
        res.send(e)
    })
}

//function for accept friend
exports.acceptfriend = (req, res) => {
    friendrelation.findByIdAndUpdate(req.params._id, { Status: "Friends" }).then(function () {
        res.send("friend Accepted").catch(function (e) {
            res.send(e)
        })
    })
}

//function for accept friend
exports.checkFriendRelation = (req, res) => {
    friendrelation.findOne({ $or: [{ user_id_1: req.query.user_id_1, user_id_2: req.query.user_id_2 },
        { user_id_1: req.query.user_id_2, user_id_2: req.query.user_id_1 }]}).populate('user_id_1').populate('user_id_2').then(function (getfriend) {
        res.send(getfriend)
        console.log(getfriend)
    }).catch(function (e) {
        res.send(e)
    })
}

