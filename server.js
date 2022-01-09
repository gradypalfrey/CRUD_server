require('dotenv').config();
const express = require('express')
const bodyparser = require("body-parser")
const path = require("path")

const connectDB = require('./server/database/connection')

const app = express()

connectDB()

app.use(bodyparser.urlencoded({ extended: true}))

app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname, "views/ejs"))

app.use("/js", express.static(path.resolve(__dirname, "assets/js")))

app.use('/', require('./server/routes/router'))

app.listen(process.env.PORT, () => {
    console.log("Running")
})