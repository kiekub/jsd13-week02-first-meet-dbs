const express = require("express");
const {
  getAllSessions,
  getSessionById,
  createSession,
  updateSession,
  deleteSession,
  getSessionsByBooking,
} = require("../controllers/sessionController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.use(protect);

router.get("/booking/:bookingId", getSessionsByBooking);
router.route("/").get(getAllSessions).post(createSession);
router.route("/:id").get(getSessionById).patch(updateSession).delete(deleteSession);

module.exports = router;
