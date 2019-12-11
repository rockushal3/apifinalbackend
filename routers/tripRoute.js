const express = require("express")
const router = express.Router()
const tripController = require("../controller/tripController")
router.post("/createTrip",tripController.addTrip)
router.get("/findTrip",tripController.findTrip)
router.get("/findTripById/:_id",tripController.findTripById)
router.delete("/deleteTrip/:_id",tripController.deleteTripById)
router.put("/updateTrip/:_id",tripController.updateTrip)
module.exports = router