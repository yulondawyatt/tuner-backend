// DEPENDENCIES
const app = require('./app');
require("dotenv").config() // Gives us acces to our environment variables in .env

const PORT = process.env.PORT

// LISTENER
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});