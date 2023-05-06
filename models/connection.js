require("dotenv").config();
const { MONGODB_URL } = process.env
//{PORT:4000, MONGODB_URL: ///} 
const mongoose = require("mongoose");

//--------DATABASE CONNECTION--------//
mongoose.connect(MONGODB_URL)

// Connection Events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

module.exports = mongoose;