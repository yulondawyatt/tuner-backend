// DEPENDENCIES
const express = require("express");
const { getAllSongs, getSong, createSong } = require("../queries/songs");
const songs = express.Router();



// GET all songs
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if(allSongs[0]) {
        res.status(200).json(allSongs);
    } else {
        res.status(500).json({ error: "server error"});
    }
});

// GET one song / SHOW
// localhost:4047/:id
songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const oneSong = await getSong(id);
    if (oneSong) {
        res.json(oneSong);
    } else {
        res.json(404).json({ error: "Not Found"});
    }
});

// POST a new song / CREATE
// localhost:4047/songs/
songs.post("/", async (req, res) => {
    const song = await createSong(req.body);
    res.status(200).json(song);
});







module.exports = songs;