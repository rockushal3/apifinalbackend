const user = require("../model/userModel")

//function for adding trip
exports.addUser =(req, res) => {
    const User = new user(
        req.body)
        User.save().then(function( ){
            res.send("User Has been Register")
        }).catch(function(e){
            res.send(e)
        })
    }

    //function for getting trip
exports.findUser= async(req, res) => {
   user.find().then(function(findAllUser) {
        res.send(findAllUser).catch(function(e){
            res.send(e)
        })
      })
  }
    //function for getting trip by id
exports.findUserById= (req, res) => {
    user.findById(req.params._id)
    .then(function(userById) {
        res.send(userById).catch(function(e){
            res.send(e)
        })
      })
  }

  //fuction for delete trip by id 
  exports.deleteUserById = (req, res) => {
      user.findByIdAndDelete(req.params._id).then(function(){
          res.send("User Deleted").catch(function(e){
              res.send(e)
          })
      })
  }

  //function for update trip 
  exports.updateUser = (req,res) =>{
        user.findOneAndUpdate(req.params._id,req.body).then(function(){
            res.send("User Updated").catch(function(e){
                res.send(e)
            })
        })
  }
