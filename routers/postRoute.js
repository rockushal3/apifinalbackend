const express = require("express")
const router = express.Router()
const upload = require("../middleware/uploadpost")
const postController = require("../controller/postController")
const auth = require('../middleware/auth')

router.post("/post",[auth,upload],postController.addpost)
router.get("/post",auth,postController.findpost)
router.get("/post/:_id",auth,postController.findpostById)
router.delete("/post/:_id",postController.deletepostById)
router.put("/post/:_id",postController.updatepost)
router.get("/findpostByUserId/:user_id",postController.findpostByUserId)

module.exports = router