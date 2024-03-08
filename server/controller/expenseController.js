const Expense = require("../model/Expense");

exports.getExpenses = async (req, res) => {
  const { userId } = req.body;
  try {
    const expenses = await Expense.find({ user: userId });
    res.status(200).json({ message: "Fetched expenses", expenses: expenses });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addExpense = async (req, res) => {
  const { userId, category, amount, description } = req.body;
  try {
    const expense = new Expense({
      user: userId,
      category,
      amount,
      description,
    });
    await expense.save();

    res.status(201).json({ message: "Expense created!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
