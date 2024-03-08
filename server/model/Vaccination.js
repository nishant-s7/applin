const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vaccinationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  administeredDate: {
    type: Date,
    required: true,
  },
  nextDueDate: {
    type: Date,
    required: true,
  },
  animal: {
    type: Schema.Types.ObjectId,
    ref: "Animal",
  },
});

module.exports = mongoose.model("Vaccination", vaccinationSchema);
