const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs;
    } catch (error) {
        return error;
    }
    };

const getSong = async (id) => {
    try {
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
        return oneSong;
    } catch (error) {
        return error;
    }
};

const createSong = async (song) => {
    try {
        const newSong = await db.one(
            "INSERT INTO songs (name, artist) VALUES ($1, $2) RETURNING *", 
            [song.name, song.artist]
        );
        return newSong;
    }   catch (error) {
        return error;
    }
};




module.exports = { 
    getAllSongs, 
    getSong, 
    createSong 
};