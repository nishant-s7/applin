const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    animal: {
      type: Schema.Types.ObjectId,
      ref: "Animal",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
