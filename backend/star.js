const express = require("express");
const router = express.Router();

// schemes
const { Star } = require("./models");

//    /!\ EVERY REQUEST HERE MUST HAVE BOTH USERS EXIST.

router.post("/add", async (req, res) => {
  try {
    const mentorQuery = req.body.idMentor;
    const studentQuery = req.body.idStudent;
    try {
      const star = await Star.create({
        idmentor: mentorQuery,
        idstudent: studentQuery,
      });
      res.status(200).send();
    } catch (error) {
      console.log(error);
      res.status(404).send();
    }
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

router.delete("/remove", async (req, res) => {
  try {
    const mentorQuery = req.body.idMentor;
    const studentQuery = req.body.idStudent;
    try {
      const star = await Star.destroy({
        where: { idmentor: mentorQuery, idstudent: studentQuery },
      });
      res.status(200).send();
    } catch (error) {
      console.log(error);
      res.status(404).send();
    }
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

module.exports = router;
