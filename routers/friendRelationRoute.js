const express = require("express")
const router = express.Router()
const friendrelation = require("../controller/friendRelationController")

router.post("/addfriend",friendrelation.addfriend)


module.exports = router