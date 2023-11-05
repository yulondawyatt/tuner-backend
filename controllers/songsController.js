// DEPENDENCIES
const express = require("express");

const songs = express.Router();


// GET all songs
songs.get("/", (req, res) => {
    res.json({ status: "ok" });
});


module.exports = songs;