const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const authentify = require("../middlewares/auth.middleware.js");
const user = require("../models/user.model.js");

router.post("/signup", async function (req, res) {
  try {
    const { first_name, last_name, username, email, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUSer = new user({
      name: {
        first_name: first_name,
        last_name: last_name,
      },
      email,
      username,
      password: hashedPassword,
    });
    await newUSer.save();
    res.status(201).json({ message: "user is created" });
  } catch (error) {
    res.status(500).send("Error saving user: " + error.message);
  }
});

router.post("/signin", async function (req, res) {
  try {
    const { email, password } = req.body;
    const foundUser = await user.findOne({ email });

    if (!foundUser) {
      return res.json({ message: "wrong user" });
    }

    const corretPassword = await bcryptjs.compare(password, foundUser.password);

    if (!corretPassword) {
      return res.json({ message: "wrong user" });
    }

    const token = jsonwebtoken.sign(
      {
        id: foundUser._id,
        username: foundUser.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    return res
      .cookie("token", token, { httpOnly: true })
      .json({ message: "user is got" });
  } catch (error) {
    return res.status(500).send("Error logging in: " + error.message);
  }
});

module.exports = router;
