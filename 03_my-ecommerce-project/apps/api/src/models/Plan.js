const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    plan_name: {
      type: String,
      required: [true, "Plan name is required"],
      unique: true,
    },
    duration: {
      type: Number,
      required: [true, "Duration is required"],
      min: 1,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Plan", planSchema);
