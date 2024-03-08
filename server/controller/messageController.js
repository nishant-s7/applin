const Message = require("../model/Message");

exports.getMessages = async (req, res, next) => {
  const { userId } = req.body;
  try {
    const messages = await Message.find({ user: userId }).populate([
      "vaccination",
      "product",
      "breeding",
    ]);
    res.status(200).json({ message: "Fetched messages", messages: messages });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.sendMessage = async (req, res, next) => {
  const { userId } = req.body;
  try {
    const animals = await Animal.find({ user: userId }).populate(["productionHistory, vaccinationHistory, breedingHistory"]);

    for (let i = 0; i < animals.productionHistory.length; i++) {
      if (animals.productionHistory[i].status)
    }

    const message = new Message({
      user: userId,
      type,
      vaccination: vaccinationId,
      product: productId,
      breeding: breedingId,
      message,
    });
    await message.save();
    res.status(201).json({ message: "Message sent!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};