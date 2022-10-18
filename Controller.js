const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const model = require("./models/");

let app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
app.post("/create", async (req, res) => {
  // let reqs = await model.User.create({
  //   'name': req.body.nameUser,
  //   'password': req.body.passwordUser,
  //   'email': req.body.emailUser,
  //   'balance': 1000,
  //   'createdAt': new Date(),
  //   'updatedAt': new Date(),
  // });
  console.log(req.body.nameUser);
});

// STARTER SERVER
let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log("Server Rodadando");
});
