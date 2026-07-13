const Booking = require("../models/Booking");

const populateBooking = (query) =>
  query
    .populate("user_id", "name email bedtime waketime")
    .populate("plan_id", "plan_name duration price")
    .populate("host_id", "name personality rating host_status");

exports.getAllBookings = async (req, res, next) => {
  try {
    const { booking_status, user_id, host_id } = req.query;
    const filter = {};
    if (booking_status) filter.booking_status = booking_status;
    if (user_id) filter.user_id = user_id;
    if (host_id) filter.host_id = host_id;

    const bookings = await populateBooking(Booking.find(filter));
    res.status(200).json({ status: "success", data: bookings });
  } catch (err) {
    next(err);
  }
};

exports.getBookingById = async (req, res, next) => {
  try {
    const booking = await populateBooking(Booking.findById(req.params.id));
    if (!booking) {
      return res
        .status(404)
        .json({ status: "fail", message: "Booking not found" });
    }
    res.status(200).json({ status: "success", data: booking });
  } catch (err) {
    next(err);
  }
};

exports.createBooking = async (req, res, next) => {
  try {
    const booking = await Booking.create(req.body);
    const populated = await populateBooking(Booking.findById(booking._id));
    res.status(201).json({ status: "success", data: populated });
  } catch (err) {
    next(err);
  }
};

exports.updateBooking = async (req, res, next) => {
  try {
    const booking = await populateBooking(
      Booking.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      })
    );
    if (!booking) {
      return res
        .status(404)
        .json({ status: "fail", message: "Booking not found" });
    }
    res.status(200).json({ status: "success", data: booking });
  } catch (err) {
    next(err);
  }
};

exports.deleteBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res
        .status(404)
        .json({ status: "fail", message: "Booking not found" });
    }
    res.status(204).json({ status: "success", data: null });
  } catch (err) {
    next(err);
  }
};

exports.getMyBookings = async (req, res, next) => {
  try {
    const bookings = await populateBooking(
      Booking.find({ user_id: req.user._id })
    );
    res.status(200).json({ status: "success", data: bookings });
  } catch (err) {
    next(err);
  }
};
