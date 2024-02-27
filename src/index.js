const express = require("express");
// const port = 3000;
const bodyParser = require("body-parser");
const { port } = require("./config/serverConfig");

require("dotenv").config();
const startServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get("/", (req, res) => {
    res.send("hello wworld");
  });
  app.listen(port, function () {
    console.log(`Server started at the port ${port}`);
  });
};
startServer();
