const express = require("express");
const {
  getAllHosts,
  getHostById,
  createHost,
  updateHost,
  deleteHost,
  getActiveHosts,
} = require("../controllers/hostController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.get("/active", getActiveHosts);
router.use(protect);
router.route("/").get(getAllHosts).post(createHost);
router.route("/:id").get(getHostById).patch(updateHost).delete(deleteHost);

module.exports = router;
