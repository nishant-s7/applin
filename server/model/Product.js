const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    processing: {
      type: String,
      default: "Raw", // Pasteurized, Raw, UHT
    },
    expiresOn: {
      type: Date,
      required: true,
    },
    animal: {
      type: Schema.Types.ObjectId,
      ref: "Animal",
    },
    status: {
      type: String,
      default: "Available", // Available, Sold
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
