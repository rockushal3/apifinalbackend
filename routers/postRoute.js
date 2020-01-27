const express = require("express")
const router = express.Router()
const upload = require("../middleware/uploadpost")
const postController = require("../controller/postController")

router.post("/createpost",upload,postController.addpost)
router.get("/findpost",postController.findpost)
router.get("/findpostById/:_id",postController.findpostById)
router.delete("/deletepost/:_id",postController.deletepostById)
router.put("/updatepost/:_id",postController.updatepost)
router.get("/findpostByUserId/:user_id",postController.findpostByUserId)

module.exports = router