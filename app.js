require("./db/dbsetting")
const cors = require("cors")
const express = require('express')
const bodyparser = require("body-parser")
const path = require("path");
const router = require("router")
const app = express()
const publicdirectory= path.join(__dirname,'public');
app.use(express.static(publicdirectory));

//Routers
const UserRoute = require("./routers/userRoute")
const TripRoute = require("./routers/tripRoute")
const PostRoute = require("./routers/postRoute")
const FriendRoute = require("./routers/friendRelationRoute")
//parse json data in form body client UI
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyparser.json())
app.use(express.json())
app.use(UserRoute)
app.use(TripRoute)
app.use(PostRoute)
app.use(FriendRoute)

app.listen("3030")