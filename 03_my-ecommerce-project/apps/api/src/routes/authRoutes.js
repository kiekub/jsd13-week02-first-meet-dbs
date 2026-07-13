const express = require("express");
const {
  registerUser,
  loginUser,
  registerHost,
  loginHost,
} = require("../controllers/authController");

const router = express.Router();

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.post("/host/register", registerHost);
router.post("/host/login", loginHost);

module.exports = router;
