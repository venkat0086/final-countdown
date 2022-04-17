const express = require("express");

require("dotenv").config();

const connect = require("./config/db");

const userController = require("./controllers/user.controller");
const { register, login } = require("./controllers/auth.controller");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

app.post("/register", register);
app.post("/login", login);

app.use("/users", userController);

const port = process.env.PORT || 7890;

app.listen(port, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err.message);
  }
  console.log("listening on port: 7890");
});
