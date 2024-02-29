const express = require("express");
// const port = 3000;
const bodyParser = require("body-parser");
const { port } = require("./config/serverConfig");

const startServer = async () => {
  // How this models work for us and how it is working for us
  const app = express();
  // this is the middle-ware we have added so far
  // ================================================
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get("/", (_req, res) => {
    // ==============================================
    res.send("hello wworld");
  });
  app.listen(port, function () {
    console.log(`Server started at the port ${port}`);
  });
};
startServer();
