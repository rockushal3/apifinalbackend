require("./db/dbsetting")
const express = require('express')
const bodyparser = require("body-parser")
const cors = require("cors")
const app = express()


//Routers
const UserRoute = require("./routers/userRoute")
const TripRoute = require("./routers/tripRoute")

//parse json data in form body client UI
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyparser.json())

app.use(express.json())
app.use(UserRoute)
app.use(TripRoute)
app.listen(3000)