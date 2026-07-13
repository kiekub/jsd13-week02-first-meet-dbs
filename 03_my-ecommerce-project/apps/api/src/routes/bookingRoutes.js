const express = require("express");
const {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
  getMyBookings,
} = require("../controllers/bookingController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.use(protect);

router.get("/my-bookings", getMyBookings);
router.route("/").get(getAllBookings).post(createBooking);
router.route("/:id").get(getBookingById).patch(updateBooking).delete(deleteBooking);

module.exports = router;
