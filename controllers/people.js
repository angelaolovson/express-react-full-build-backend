const express = require("express");
const People = require("../models/people");
const router = express.Router();

//--------Routes--------//
router.get("/",async (req,res) => {
    try {
        res.json(await People.find({})).status(200);
    } catch(error) {
        res.status(400).json(error)
    } finally {
        console.log("this is finally")
    }
})

// GET by id
router.get("/:id", async (req, res) => {
    try {
      res.json(await People.findById(req.params.id)).status(200);
    } catch (error) {
      res.status(400).json(error);
      console.log("error", error);
    } finally {
      console.log("this is finally");
    }
  });
  
// post
router.post("/",async (req,res) => {
    try {
        res.json(await People.create(req.body))
    } catch(error) {
        res.status(400).json(error)
    }
})

//put
router.put("/:id",async (req,res) => {
    try {
        res.json(await People.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch(error) {
        res.status(400).json(error)
    }
})

//delete
router.delete("/:id",async (req,res) => {
    try {
        res.json(await People.findByIdAndDelete(req.params.id))
    } catch(error) {
        res.status(400).json(error)
    }
})


module.exports = router;