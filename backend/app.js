const express = require("express");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.route.js");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);
module.exports = app;
