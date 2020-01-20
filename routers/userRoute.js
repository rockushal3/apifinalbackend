const express = require("express");
const router = express.Router();
const userController = require("../controller/userController")
router.post("/createUser",userController.addUser)
router.get("/findUser",userController.findUser)
router.get("/findUserById/:_id",userController.findUserById)
router.delete("/deleteUser/:_id",userController.deleteTripById)
router.put("/updateUser/:_id",userController.updateTrip)
module.exports = router