const express = require("express");
const router = express.Router();
const { Location,Traveller,Trip } = require("../../models");

router.get("/", (req, res) => {
  Location.findAll({
    
  })
    .then(dbLocations => {
      if (dbLocations.length) {
        res.json(dbLocations);
      } else {
        res.status(404).json({ message: "No Locations found!" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "an error occured", err: err });
    });
});

router.post("/", (req, res) => {
  Location.create({
    
  })
    .then(newLocation => {
      res.json(newLocation);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "an error occured", err: err });
    });
});

module.exports = router;