const Animal = require("../model/Animal");
const Product = require("../model/Product");

exports.addAnimal = async (req, res, next) => {
  const { type, breed, dob } = req.body;
  try {
    const animal = new Animal({
      type,
      breed,
      dob,
    });
    const result = await animal.save();
    res.status(201).json({ message: "Animal created!", animalId: result._id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getAnimal = async (req, res, next) => {
  const animalId = req.body.animalId;
  try {
    const animal = await Animal.findById(animalId).populate(
      "productionHistory"
    );
    res.status(200).json({ message: "Fetched animal", animal: animal });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getAnimals = async (req, res, next) => {
  try {
    const type = req.body.type;
    const animals = await Animal.find({ type: type });
    res.status(200).json({ message: "Fetched animals", animals: animals });
    console.log(animals);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addProduct = async (req, res, next) => {
  const { animalId, quantity } = req.body;
  try {
    const product = new Product({
      quantity,
      animal: animalId,
    });
    const result = await product.save();

    const animal = await Animal.findById(animalId);
    animal.productionHistory.push(result._id);
    await animal.save();

    res.status(201).json({ message: "Product added!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
