const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const priceSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  }
);

module.exports = mongoose.model("Price", priceSchema);
