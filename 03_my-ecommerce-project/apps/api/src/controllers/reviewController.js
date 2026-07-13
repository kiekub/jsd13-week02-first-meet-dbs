const Review = require("../models/Review");
const Booking = require("../models/Booking");

const populateReview = (query) =>
  query.populate({
    path: "booking_id",
    populate: [
      { path: "user_id", select: "name email" },
      { path: "host_id", select: "name personality" },
    ],
  });

exports.getAllReviews = async (req, res, next) => {
  try {
    const reviews = await populateReview(Review.find());
    res.status(200).json({ status: "success", data: reviews });
  } catch (err) {
    next(err);
  }
};

exports.getReviewById = async (req, res, next) => {
  try {
    const review = await populateReview(Review.findById(req.params.id));
    if (!review) {
      return res
        .status(404)
        .json({ status: "fail", message: "Review not found" });
    }
    res.status(200).json({ status: "success", data: review });
  } catch (err) {
    next(err);
  }
};

exports.createReview = async (req, res, next) => {
  try {
    const { booking_id } = req.body;

    const existing = await Review.findOne({ booking_id });
    if (existing) {
      return res.status(400).json({
        status: "fail",
        message: "Review already exists for this booking",
      });
    }

    const booking = await Booking.findById(booking_id);
    if (!booking) {
      return res
        .status(404)
        .json({ status: "fail", message: "Booking not found" });
    }

    const review = await Review.create(req.body);
    const populated = await populateReview(Review.findById(review._id));
    res.status(201).json({ status: "success", data: populated });
  } catch (err) {
    next(err);
  }
};

exports.updateReview = async (req, res, next) => {
  try {
    const review = await populateReview(
      Review.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      })
    );
    if (!review) {
      return res
        .status(404)
        .json({ status: "fail", message: "Review not found" });
    }
    res.status(200).json({ status: "success", data: review });
  } catch (err) {
    next(err);
  }
};

exports.deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return res
        .status(404)
        .json({ status: "fail", message: "Review not found" });
    }
    res.status(204).json({ status: "success", data: null });
  } catch (err) {
    next(err);
  }
};

exports.getReviewsByBooking = async (req, res, next) => {
  try {
    const reviews = await Review.find({ booking_id: req.params.bookingId });
    res.status(200).json({ status: "success", data: reviews });
  } catch (err) {
    next(err);
  }
};
