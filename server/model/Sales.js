const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expenseSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      Ref: "User",
    },
    amount: {
      type: Number,
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          Ref: "Product",
        },
      },
    ],
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sales", expenseSchema);
