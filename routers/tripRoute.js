const express = require("express");
const router = express.Router();
const tripController = require("../controller/tripController");
router.get("/createTrip",tripController.addTrip);

module.exports = router;