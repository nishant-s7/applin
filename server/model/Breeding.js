const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const breedingSchema = new Schema({
  inseminationDate: {
    type: Date,
    required: true,
  },
  expectedDeliveryDate: {
    type: Date,
    required: true,
  },
  animal: {
    type: Schema.Types.ObjectId,
    ref: "Animal",
  },
});

module.exports = mongoose.model("Breeding", breedingSchema);
