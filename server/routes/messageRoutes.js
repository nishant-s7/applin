const express = require("express");

const messageController = require("../controller/messageController");

const router = express.Router();

router.post("/getMessages", messageController.getMessages);
router.post("/sendMessages", messageController.sendMessages);

module.exports = router;
