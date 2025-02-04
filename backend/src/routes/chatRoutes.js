const express = require("express");
const { chat } = require("../controllers/chatControllers");
const router = express.Router();

router.post("/", chat);

module.exports = router;
