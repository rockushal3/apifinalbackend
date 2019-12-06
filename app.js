const express = require('express');
const bodyparser = require("body-parser");
const app = express();

//Routers
const UserRoute = require("./routes/userRoute");

//parse json data in form body client UI
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())

app.use(express.json());
app.use(UserRoute);

app.listen(3000);