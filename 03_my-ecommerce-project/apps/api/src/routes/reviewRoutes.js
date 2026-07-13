const express = require("express");
const {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  getReviewsByBooking,
} = require("../controllers/reviewController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.use(protect);

router.get("/booking/:bookingId", getReviewsByBooking);
router.route("/").get(getAllReviews).post(createReview);
router.route("/:id").get(getReviewById).patch(updateReview).delete(deleteReview);

module.exports = router;
