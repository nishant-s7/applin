const Sale = require("../model/Sale");
const Price = require("../model/Price");

exports.getSales = async (req, res) => {
  const { userId } = req.body;
  try {
    const sales = await Sale.find({ user: userId }).populate("products");
    res.status(200).json({ message: "Fetched sales", sales: sales });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addSale = async (req, res) => {
  const { userId, productIds, description } = req.body;
  try {
    let amount = 0;
    const prices = await Price.find();

    const products = await Promise.all(
      productIds.map(async (id) => {
        return await Product.findById(id);
      })
    );

    for (let i = 0; i < products.length; i++) {
      const price = prices.find((price) => price.type === products[i].type);
      amount += price * products[i].quantity;
    }

    products.forEach(async (product) => {
      const p = await Product.findById(product._id);
      pr.status = "Sold";
      await p.save();
    });

    const sale = new Sale({
      user: userId,
      amount,
      products: productIds,
      description,
    });
    await sale.save();

    res.status(201).json({ message: "Sale created!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
