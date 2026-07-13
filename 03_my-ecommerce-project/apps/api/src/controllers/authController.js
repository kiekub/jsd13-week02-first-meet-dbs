const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Host = require("../models/Host");

const signToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password, bedtime, waketime } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res
        .status(400)
        .json({ status: "fail", message: "Email already in use" });
    }

    const user = await User.create({ name, email, password, bedtime, waketime });
    const token = signToken(user._id, "user");

    res.status(201).json({
      status: "success",
      data: {
        user: { _id: user._id, name, email, bedtime, waketime },
        token,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "fail", message: "Please provide email and password" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.comparePassword(password))) {
      return res
        .status(401)
        .json({ status: "fail", message: "Incorrect email or password" });
    }

    const token = signToken(user._id, "user");

    res.status(200).json({
      status: "success",
      data: {
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          bedtime: user.bedtime,
          waketime: user.waketime,
        },
        token,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.registerHost = async (req, res, next) => {
  try {
    const { name, email, password, gender, personality } = req.body;

    const existing = await Host.findOne({ email });
    if (existing) {
      return res
        .status(400)
        .json({ status: "fail", message: "Email already in use" });
    }

    const host = await Host.create({
      name,
      email,
      password,
      gender,
      personality,
    });
    const token = signToken(host._id, "host");

    res.status(201).json({
      status: "success",
      data: {
        host: {
          _id: host._id,
          name,
          email,
          gender,
          personality,
          rating: host.rating,
          host_status: host.host_status,
        },
        token,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.loginHost = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "fail", message: "Please provide email and password" });
    }

    const host = await Host.findOne({ email }).select("+password");
    if (!host || !(await host.comparePassword(password))) {
      return res
        .status(401)
        .json({ status: "fail", message: "Incorrect email or password" });
    }

    const token = signToken(host._id, "host");

    res.status(200).json({
      status: "success",
      data: {
        host: {
          _id: host._id,
          name: host.name,
          email: host.email,
          gender: host.gender,
          personality: host.personality,
          rating: host.rating,
          host_status: host.host_status,
        },
        token,
      },
    });
  } catch (err) {
    next(err);
  }
};
