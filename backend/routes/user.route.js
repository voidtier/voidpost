const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const authentify = require("../middlewares/auth.middleware.js");
const user = require("../models/user.model.js");

router.post("/signup", async function (req, res) {
  try {
    const { firstname, lastname, email, username, password } = req.body;

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUSer = new user({
      name: {
        firstname: firstname,
        lastname: lastname,
      },
      email,
      username,
      password: hashedPassword,
    });
    await newUSer.save();
    res.status(201);
  } catch (error) {
    res.status(500).send("Error saving user: " + error.message);
  }
});

router.post("/signin", async function (req, res) {
  try {
    const { email, password } = req.body;
    const foundUser = await user.findOne({ email });

    if (!foundUser) {
      return res.redirect("/signin?logerror=email or password is incorrect");
    }

    const corretPassword = await bcryptjs.compare(password, foundUser.password);

    if (!corretPassword) {
      return res.redirect("/signin?logerror=email or password is incorrect");
    }

    const token = jsonwebtoken.sign(
      {
        id: foundUser._id,
        username: foundUser.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.cookie("token", token, { httpOnly: true });
    return res.redirect("/");
  } catch (error) {
    return res.status(500).send("Error logging in: " + error.message);
  }
});

module.exports = router;
