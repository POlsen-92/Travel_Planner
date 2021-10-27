const express = require('express');
const router = express.Router();

const locationRoutes = require("./locationController");
router.use("/locations",);

const travellerRoutes = require("./travellerController");
router.use("/travellers",);

const tripRoutes = require("./tripController");
router.use("/trips",);

module.exports = router;