const express = require("express");
const Users = require("../models/Register.model");
const router = express.Router();

router.post("/register", async(req, res) => {
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
            res.render("login.ejs")
        } else {
            res.render("Register.ejs");
        }
    } catch (error) {
        res.status(400).render("Register.ejs");
    }
});

router.get("/register", (req, res) => {
    res.render("Register.ejs");
});
router.get("/signup", async(req, res) => {
    const users = await Users.find().lean().exec();
    return res.status(200).send({ users })
});


router.get("/home", async(req, res) => {
    const users = await Users.find().lean().exec();
    res.render("index.ejs", {
        users: users
    })
})

router.get("/login", async(req, res) => {
    const users = await Users.find().lean().exec();
    // return res.status(201).send({ users })
    res.render("login.ejs", {
        users: users
    })
})

router.get("/dashboard", async(req, res) => {
    const users = await Users.find().lean().exec();
    res.render("dashboard.ejs", {
        users: users
    })
})

router.get("/particular", async(req, res) => {
    const users = await Users.find().lean().exec();
    res.render("particular.ejs", {
        users: users
    })
})

router.get("/learn", async(req, res) => {

    res.render("learn.ejs")
})



module.exports = router;