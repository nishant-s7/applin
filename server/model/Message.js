const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    type: {
      type: String, // Vaccine, Product, Breed
      required: true,
    },
    vaccination: {
      type: Schema.Types.ObjectId,
      ref: "Vaccination",
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    breeding: {
      type: Schema.Types.ObjectId,
      ref: "Breeding",
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
