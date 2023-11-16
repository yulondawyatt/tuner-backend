// DEPENDENCIES
const cors = require("cors"); //import cors
const express = require("express");
const songsController = require("./controllers/songsController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/songs", songsController);

//// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to Tuner App by Yulonda!");
});

// 404 PAGE
app.get("*", (req, res) => {
    res.send("Page Not Found");
});

// EXPORT
module.exports = app;