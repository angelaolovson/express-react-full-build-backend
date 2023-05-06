//--------DEPENDENCIES--------//
require("dotenv").config()
const {PORT} = process.env //process.env is an object
const express = require("express");
const app = express();
//--------import middlware--------//
const cors = require("cors");
const morgan = require("morgan");
const peopleRouter = require("./controllers/people");

//--------MiddleWare--------//
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies
app.use("/people", peopleRouter);

//--------ROUTES--------//
app.get("/", (req,res) => {
    res.send("hiiii")
})


//--------LISTEN--------//
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))