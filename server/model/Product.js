const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  animal: {
    type: Schema.Types.ObjectId,
    ref: "Animal",
  },
});

module.exports = mongoose.model("Product", productSchema);
