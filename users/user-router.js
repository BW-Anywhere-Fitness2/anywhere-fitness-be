const express = require("express");
const users = require("./user-model");
const restricted = require("../auth/restricted-middleware");

const router = express.Router();

router.get("/", restricted, (req, res) => {
  users
    .getClasses()
    .then((classes) => {
      // console.log(classes);
      res.status(200).json({ classes: classes });
    })
    .catch((err) => {
      res.status(500).json({ message: "Can't get the classes." });
    });
});

module.exports = router;
