const mongoose = require("mongoose");

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
    default: "Healthy", // Healthy, Sick, Recovering
  },
  productionHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  vaccinationHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Vaccination",
    },
  ],
  breedingHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Breeding",
    },
  ],
});

module.exports = mongoose.model("Animal", animalSchema);
