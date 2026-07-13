const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    plan_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
      required: [true, "Plan ID is required"],
    },
    host_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Host",
      required: [true, "Host ID is required"],
    },
    schedule: {
      start_date: { type: String, required: [true, "Start date is required"] },
      end_date: { type: String, required: [true, "End date is required"] },
      frequency: {
        type: String,
        required: [true, "Frequency is required"],
        default: "daily",
      },
    },
    payment: {
      payment_id: { type: String, required: [true, "Payment ID is required"] },
      payment_method: {
        type: String,
        required: [true, "Payment method is required"],
        enum: ["credit_card", "paypal", "bank_transfer"],
      },
      amount: { type: Number, required: [true, "Amount is required"], min: 0 },
      payment_status: {
        type: String,
        required: [true, "Payment status is required"],
        enum: ["paid", "pending", "failed", "refunded"],
        default: "pending",
      },
      paid_at: { type: String, default: null },
    },
    booking_status: {
      type: String,
      required: [true, "Booking status is required"],
      enum: ["success", "pending", "cancelled"],
      default: "pending",
    },
    booking_date: {
      type: String,
      required: [true, "Booking date is required"],
    },
  },
  { timestamps: true }
);

bookingSchema.index({ user_id: 1 });
bookingSchema.index({ host_id: 1 });

module.exports = mongoose.model("Booking", bookingSchema);
