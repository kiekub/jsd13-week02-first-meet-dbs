const express = require("express");
const {
  getAllPlans,
  getPlanById,
  createPlan,
  updatePlan,
  deletePlan,
} = require("../controllers/planController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.use(protect);
router.route("/").get(getAllPlans).post(createPlan);
router.route("/:id").get(getPlanById).patch(updatePlan).delete(deletePlan);

module.exports = router;
