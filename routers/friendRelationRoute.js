const express = require("express")
const router = express.Router()
const friendrelation = require("../controller/friendRelationController")

router.post("/addfriend",friendrelation.addfriend)
router.get("/getrequest/:_id",friendrelation.getrequest)
router.get("/allfriend/:_id",friendrelation.getAllFriends)
router.put("/acceptfriend/:_id",friendrelation.acceptfriend)
router.get("/checkRelation",friendrelation.checkFriendRelation)
router.delete("/deleteFriend/:id",friendrelation.deleteFriend)





module.exports = router