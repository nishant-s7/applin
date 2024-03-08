const Message = require("../model/Message");
const Animal = require("../model/Animal");

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

exports.sendMessages = async (req, res, next) => {
  const { userId } = req.body;
  try {
    const animals = await Animal.find({ user: userId }).select("_id");

    for (let j = 0; j < animals.length; j++) {
      const currentAnimal = await Animal.findById(animals[j]._id).populate([
        "productionHistory",
        "vaccinationHistory",
        "breedingHistory",
      ]);
      for (let i = 0; i < currentAnimal.productionHistory.length; i++) {
        // Product
        if (currentAnimal.productionHistory[i].status === "Available") {
          const buffer =
            new Date(currentAnimal.productionHistory[i].expiresOn) - new Date();
          if (buffer <= 0) {
            currentAnimal.productionHistory[i].status = "Expired";
            await currentAnimal.productionHistory[i].save();
          } else if (buffer > 0 && buffer <= 24 * 60 * 60 * 1000) {
            const message = new Message({
              user: userId,
              type: "Product",
              product: currentAnimal.productionHistory[i]._id,
              message: "Product is about to expire!",
            });
            await message.save();
          }
        }
      }
      // Vaccination
      for (let i = 0; i < currentAnimal.vaccinationHistory.length; i++) {
        const buffer =
          new Date(currentAnimal.vaccinationHistory[i].nextDueDate) -
          new Date();
        if (buffer > 0 && buffer <= 7 * 24 * 60 * 60 * 1000) {
          const message = new Message({
            user: userId,
            type: "Vaccine",
            vaccination: currentAnimal.vaccinationHistory[i]._id,
            message: "Vaccination is due!",
          });
          await message.save();
        }
      }
      // Breeding
      for (let i = 0; i < currentAnimal.breedingHistory.length; i++) {
        const buffer =
          new Date(currentAnimal.breedingHistory[i].expectedDeliveryDate) -
          new Date();
        if (buffer > 0 && buffer <= 14 * 24 * 60 * 60 * 1000) {
          const message = new Message({
            user: userId,
            type: "Breed",
            breeding: currentAnimal.breedingHistory[i]._id,
            message: "Calf is expected within 2 weeks!",
          });
          await message.save();
        }
      }
    }
    res.status(201).json({ message: "Message sent!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
