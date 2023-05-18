const express = require("express");
const router = express.Router();

// this route is optional, it's just for creating users

// schemes
const { Student } = require("./models");

router.post("/create", async (req, res) => {
  try {
    // this seems to not be working, the issue is probably postgres being case sensitive
    await Student.create();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

router.delete("/delete", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

module.exports = router;
