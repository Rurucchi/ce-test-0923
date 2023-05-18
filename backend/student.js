const express = require("express");
const router = express.Router();

// this route is optional, it's just for creating users

// schemes
const { Student } = require("./models");

router.post("/create", async (req, res) => {
  try {
    // this seems to not be working, the issue is probably postgres being case sensitive

    // edit : this is a type issue, by it being int4 instead of serial4, the auto-increment flag does not work
    await Student.create({
      idstudent,
    });
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
