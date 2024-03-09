const express = require("express");

const expenseController = require("../controller/expenseController");

const router = express.Router();

router.post("/getExpenses", expenseController.getExpenses);
router.post("/addExpense", expenseController.addExpense);

module.exports = router;
