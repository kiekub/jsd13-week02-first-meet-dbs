const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    booking_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: [true, "Booking ID is required"],
    },
    session_date: {
      type: String,
      required: [true, "Session date is required"],
    },
    bedtime_status: {
      type: String,
      required: [true, "Bedtime status is required"],
      enum: ["completed", "missed"],
    },
    wake_status: {
      type: String,
      required: [true, "Wake status is required"],
      enum: ["completed", "missed"],
    },
    confirmation_status: {
      type: String,
      required: [true, "Confirmation status is required"],
      enum: ["confirmed", "pending", "cancelled"],
      default: "pending",
    },
    sleep_duration: {
      type: Number,
      min: 0,
      max: 24,
      default: null,
    },
  },
  { timestamps: true }
);

sessionSchema.index({ booking_id: 1 });

module.exports = mongoose.model("Session", sessionSchema);
