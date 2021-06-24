const express = require("express");
const gamescont = require("../controllers/mgamesController");
const router = express.Router();

router.route("/games")
.get(gamescont.mGamesDisplay);


module.exports = router;

