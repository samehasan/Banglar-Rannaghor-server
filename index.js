const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

//const Port = process.env.Port || 5000;

const allServices = require("./data.json");

app.get("/", (req, res) => {
  res.json("server running");
});

app.get("/allData", (req, res) => {
    res.send(allServices);
  });
app.get("/allData/:id", (req, res) => {
    const id = req.params.id;
    const item = allServices?.services?.find((p) => p.id == id);
    
    res.send(item);
  });
app.listen(5000, () => {
    console.log("server is running 5000");
  });
  module.exports = app;