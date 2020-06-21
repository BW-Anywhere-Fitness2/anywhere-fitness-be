const express = require("express");
const instructor = require("./instructor-model");
const restricted = require("../auth/restricted-middleware");
const router = express.Router();

function checkRole(role) {
  return (req, res, next) => {
    if (req.decodedToken.role === role) {
      next();
    } else {
      res.status(403).json({ message: "You are not authorized" });
    }
  };
}

router.get("/", restricted, checkRole("instructor"), (req, res) => {
  instructor
    .getClasses()
    .then((classes) => {
      if (classes) {
        res.status(200).json({ classes, decodedToken: req.decodedToken.role });
      } else {
        res.status(404).json({ message: "Can't get the list of classes." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error getting the classes." });
    });
});

router.get("/:id", restricted, checkRole("instructor"), (req, res) => {
  instructor
    .getClassById(req.params.id)
    .then((classes) => {
      if (classes) {
        res.status(200).json({ classes, decodedToken: req.decodedToken.role });
      } else {
        res.status(404).json({ message: "Class with this id doesn't exist." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error getting the classes by id." });
    });
});

router.post("/", restricted, checkRole("instructor"), (req, res) => {
  instructor
    .addClass(req.body)
    .then((classes) => {
      res.status(200).json({ classes, decodedToken: req.decodedToken.role });
    })
    .catch((err) => {
      res.status(500).json({ message: "Can't post the class." });
    });
});

router.put("/:id", restricted, checkRole("instructor"), (req, res) => {
  instructor
    .updateClass(req.params.id, req.body)
    .then((classes) => {
      if (classes) {
        res.status(200).json({ classes, decodedToken: req.decodedToken.role });
      } else {
        res.status(404).json({ message: "Incorrect information provided." });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "There was an error updating the class." });
    });
});

router.delete("/:id", restricted, checkRole("instructor"), (req, res) => {
  instructor
    .removeClass(req.params.id)
    .then((classes) => {
      if (classes) {
        res.status(200).json({ classes, decodedToken: req.decodedToken.role });
      } else {
        res.status(404).json({ message: "Class with this id doesn't exist." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting the class." });
    });
});

module.exports = router;
