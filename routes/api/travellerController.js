const express = require("express");
const router = express.Router();
const { Location,Traveller,Trip } = require("../../models");

router.get("/", (req, res) => {
  Traveller.findAll({
    
  })
    .then(dbTravellers => {
      if (dbTravellers.length) {
        res.json(dbTravellers);
      } else {
        res.status(404).json({ message: "No Travellers found!" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "an error occured", err: err });
    });
});

router.post("/", (req, res) => {
  Traveller.create({
    
  })
    .then(newTraveller => {
      res.json(newTraveller);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "an error occured", err: err });
    });
});

module.exports = router;