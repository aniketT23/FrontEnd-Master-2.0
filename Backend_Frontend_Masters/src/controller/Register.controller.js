const express = require("express");
const Users = require("../models/Register.model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.cnfrmpassword;
    if (password === cpassword) {
      const data = new Users({
        Email: req.body.Email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        cnfrmpassword: req.body.cnfrmpassword,
      });
      const registered = await data.save();
      res.status(201).send(index);
    } else {
      res.render("Register.ejs");
    }
  } catch (error) {
    res.status(400).render("Register.ejs");
  }
});

router.get("/", (req, res) => {
  res.render("Register.ejs");
});

module.exports = router;
