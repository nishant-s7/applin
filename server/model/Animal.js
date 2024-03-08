const mongoose = require("mongoose");

const productSchema = require("./Product");
const vaccinationSchema = require("./Vaccination");
const breedingSchema = require("./Breeding");

const Schema = mongoose.Schema;

const animalSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  healthStatus: {
    type: String,
    required: true,
  },
  productionHistory: [productSchema],
  vaccinationHistory: [vaccinationSchema],
  breedingHistory: [breedingSchema],
});

module.exports = mongoose.model("Animal", animalSchema);
