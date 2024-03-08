const Price = require("../model/Price");

exports.getPrice = async (req, res) => {
  const { type } = req.body;
  try {
    const price = await Price.find({ type });
    res.status(200).json({ message: "Fetched price", price: price });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getPrices = async (req, res) => {
  try {
    const prices = await Price.find();
    res.status(200).json({ message: "Fetched prices", prices: prices });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
