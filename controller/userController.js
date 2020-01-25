const user = require("../model/userModel")
var ObjectID = require('mongodb').ObjectID; 
//function for adding trip
exports.addUser = (req, res) => {
    const User = new user(
        req.body)
    User.save().then(function () {
        res.send("User Has been Register")
    }).catch(function (e) {
        res.send(e)
    })
}

//function for getting trip
exports.findUser = async (req, res) => {
    user.find().then(function (findAllUser) {
        res.send(findAllUser).catch(function (e) {
            res.send(e)
        })
    })
}
//function for getting trip by id
exports.findUserById = (req, res) => {
    user.findById(req.params._id)
        .then(function (userById) {
            res.send(userById).catch(function (e) {
                res.send(e)
            })
        })
}

//fuction for delete trip by id 
exports.deleteUserById = (req, res) => {
    user.findByIdAndDelete(req.params._id).then(function () {
        res.send("User Deleted").catch(function (e) {
            res.send(e)
        })
    })
}

//function for update trip 
exports.updateUser = (req, res) => {
    console.log(req.body);
    console.log(req.params._id)
    user.findOneAndUpdate({_id:ObjectID(req.params._id)}, req.body).then(function () {
        res.send("User Updated").catch(function (e) {
            res.send(e)
        })
    })
}

exports.uploadimage = (req, res) => {
    req.files.map(function (items) {
        const Post = new post({
            image: items.filename
        })
        user.findOneAndUpdate(req.params._id, Post).then(function () {
            res.send("Profile Picture Update").catch(function (e) {
                res.send(e)
            })
        })
    })
}

//function for Login Function
exports.login = async (req, res) => {
    try {
        const Users = await user.checkCrediantialsDb(req.body.email,
            req.body.password)
        const token = await Users.generateAuthToken()
        const userdetail=
            {
                token: token,
                _id: Users._id,
                name: Users.name,
                email: Users.email,
                gender: Users.gender,
                phone: Users.phone,
                address: Users.address,
                dob: Users.dob,
                image: Users.image,
                password: Users.password
            }
        console.log(userdetail)
        res.send(userdetail)
    }
    catch (e) {
        res.status(400).send()
    }
}


exports.uploadcoverimage = (req, res) => {
    req.files.map(function (items) {
        const User = {
            coverimage: items.filename

        }
        user.findOneAndUpdate(req.params._id, User).then(function () {
            res.send("Cover Picture Update").catch(function (e) {
                res.send(e)
            })
        })
    })

}

//function for Login Function
exports.checklogin = async (req, res) => {
    res.status(200).send()
}

//function for email validation
exports.checkemail = (req, res) => {
    user.findOne({email:req.params.email}).then(function (findAllUser) {
        res.send(findAllUser).catch(function (e) {
            res.send(e)
        })
    })
}