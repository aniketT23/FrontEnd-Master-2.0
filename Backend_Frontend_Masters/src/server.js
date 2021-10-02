const Port = 3000;
const express = require("express");
const connect = require("./config/db");
const ejs = require("ejs");

const UserSchema = require("./controller/Register.controller");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", ejs);
app.use(express.static("public"));

app.use("/register", UserSchema);

app.listen(Port, async (req, res) => {
  await connect();
  console.log(`SERVER IS RUNNING ON PORT ${Port}`);
});
