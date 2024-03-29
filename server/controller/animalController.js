const Animal = require("../model/Animal");
const Product = require("../model/Product");
const Vaccination = require("../model/Vaccination");
const Breeding = require("../model/Breeding");
const User = require("../model/User");

exports.addAnimal = async (req, res, next) => {
  const { type, breed, dob, gender, userId } = req.body;
  try {
    const animal = new Animal({
      type,
      breed,
      dob,
      gender,
      user: userId,
    });
    await animal.save();

    const user = await User.findById(userId);
    if (!user) {
      const error = new Error("User not found!");
      error.statusCode = 404;
      throw error;
    }

    let flag = false;
    user.animals.find((animal) => {
      if (animal.type === type) {
        animal.count++;
        flag = true;
      }
    });
    if (!flag) {
      user.animals.push({ type: type, count: 1 });
    }
    await user.save();

    res.status(201).json({ message: "Animal created!" });
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
    const animal = await Animal.findById(animalId).populate([
      "productionHistory",
      "vaccinationHistory",
      "breedingHistory",
    ]);
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
    const { type, userId } = req.body;
    const animals = await Animal.find({ type: type, user: userId });
    res.status(200).json({ message: "Fetched animals", animals: animals });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addProduct = async (req, res, next) => {
  const { animalId, quantity, processing, expiresOn } = req.body;
  try {
    const product = new Product({
      quantity,
      processing,
      expiresOn,
      animal: animalId,
    });
    const result = await product.save();

    const animal = await Animal.findById(animalId);
    if (!animal) {
      const error = new Error("Animal not found!");
      error.statusCode = 404;
      throw error;
    }
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

exports.getProducts = async (req, res, next) => {
  const userId = req.body.userId;
  try {
    const animals = await Animal.find({ user: userId }).select("_id");

    let products;
    for (let i = 0; i < animals.length; i++) {
      products.push(await Product.find({ animal: animals[i]._id, status: "Available"}));
    }

    res.status(200).json({ message: "Fetched products", products: products });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.vaccinateAnimal = async (req, res, next) => {
  const { animalId, name, administeredDate, nextDueDate } = req.body;
  try {
    const vaccination = new Vaccination({
      name,
      administeredDate,
      nextDueDate,
      animal: animalId,
    });
    const result = await vaccination.save();

    const animal = await Animal.findById(animalId);
    if (!animal) {
      const error = new Error("Animal not found!");
      error.statusCode = 404;
      throw error;
    }
    animal.vaccinationHistory.push(result._id);
    await animal.save();

    res.status(201).json({ message: "Animal vaccinated!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addBreedingInfo = async (req, res, next) => {
  const { animalId, inseminationDate, expectedDeliveryDate } = req.body;
  try {
    const animal = await Animal.findById(animalId);
    if (!animal) {
      const error = new Error("Animal not found!");
      error.statusCode = 404;
      throw error;
    }
    if (animal.gender !== "Female") {
      const error = new Error("Only female animals breed");
      error.statusCode = 400;
      throw error;
    }

    const breeding = new Breeding({
      inseminationDate,
      expectedDeliveryDate,
      animal: animalId,
    });
    const result = await breeding.save();

    animal.breedingHistory.push(result._id);
    await animal.save();

    res.status(201).json({ message: "Breeding info added!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
