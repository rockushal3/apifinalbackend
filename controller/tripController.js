const trip = require("../model/tripModel")

//function for adding trip
exports.addTrip =(req, res) => {
    const Trip = new trip(
        req.body)
        console.log(Trip)
        Trip.save().then(function( ){
            res.send("Trip has been added")
        }).catch(function(e){
            res.send(e)
        })
    }

    //function for getting trip
exports.findTrip= async(req, res) => {
   trip.find().then(function(findAllTrip) {
        res.send(findAllTrip).catch(function(e){
            res.send(e)
        })
      })
  }
    //function for getting trip by id
exports.findTripById= (req, res) => {
    trip.findById(req.params._id)
    .then(function(tripById) {
        res.send(tripById).catch(function(e){
            res.send(e)
        })
      })
  }

//function for getting trip by user id
exports.findTripByUserId= (req, res) => {
    trip.find({user_id:req.params.user_id})
    .then(function(tripByuserId) {
        res.send(tripByuserId).catch(function(e){
            res.send(e)
        })
      })
  }

  //fuction for delete trip by id 
  exports.deleteTripById = (req, res) => {
      trip.findByIdAndDelete(req.params._id).then(function(){
          res.send("Trip Deleted").catch(function(e){
              res.send(e)
          })
      })
  }

  //function for update trip 
  exports.updateTrip = (req,res) =>{
        trip.findOneAndUpdate(req.params._id,req.body).then(function(){
            res.send("Trip Updated").catch(function(e){
                res.send(e)
            })
        })
  }

  //router to search book by title
exports.searchTrip = (req, res) => {
    var get_title = req.query.trip_name;  
    console.log(get_title)  
    trip.find({'trip_name': {$regex:get_title, $options:"i"}}).select('user_id').populate('user_id').then(function(result){
        res.send(result)
    }).catch(function(e){
        res.send(e)
    })
}
