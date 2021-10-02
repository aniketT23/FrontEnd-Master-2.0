const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())

const connect = require("./config/db");



app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(express.urlencoded());
const UserSchema = require("./controller/Register.controller");

app.use("/", UserSchema);






app.listen(2230, async(req, res) => {
    await connect();
    console.log("listening to port number 2230");
})