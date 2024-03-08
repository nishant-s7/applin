const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    default: "New",
  },
  lastName: {
    type: String,
    default: "User",
  },
  email: {
    type: String,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  animals: [
    {
      type: {
        type: String,
        required: true,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
  ],

  isSeller: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
