const express = require("express");
const router = express.Router();

// schemes
const { Student, Mentor } = require("./models");

router.get("/create", async, (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});
