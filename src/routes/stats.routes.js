const express = require("express");
let router = express.Router();
let { StatsController } = require("../controllers");
const statsController = new StatsController();

router.get("/", statsController.getStats);

module.exports = router;