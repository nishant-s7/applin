const express = require("express");

const salesController = require("../controller/salesController");

const router = express.Router();

router.post("/getSales", salesController.getSales);
router.post("/addSale", salesController.addSale);

module.exports = router;
