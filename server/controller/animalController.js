const Animal = require("../model/Animal");

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

exports.getAnimals = async (req, res, next) => {
  try {
    const animals = await Animal.find();
    res.status(200).json({ message: "Fetched animals", animals: animals });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
