const Plan = require("../models/Plan");

exports.getAllPlans = async (req, res, next) => {
  try {
    const plans = await Plan.find();
    res.status(200).json({ status: "success", data: plans });
  } catch (err) {
    next(err);
  }
};

exports.getPlanById = async (req, res, next) => {
  try {
    const plan = await Plan.findById(req.params.id);
    if (!plan) {
      return res
        .status(404)
        .json({ status: "fail", message: "Plan not found" });
    }
    res.status(200).json({ status: "success", data: plan });
  } catch (err) {
    next(err);
  }
};

exports.createPlan = async (req, res, next) => {
  try {
    const plan = await Plan.create(req.body);
    res.status(201).json({ status: "success", data: plan });
  } catch (err) {
    next(err);
  }
};

exports.updatePlan = async (req, res, next) => {
  try {
    const plan = await Plan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!plan) {
      return res
        .status(404)
        .json({ status: "fail", message: "Plan not found" });
    }
    res.status(200).json({ status: "success", data: plan });
  } catch (err) {
    next(err);
  }
};

exports.deletePlan = async (req, res, next) => {
  try {
    const plan = await Plan.findByIdAndDelete(req.params.id);
    if (!plan) {
      return res
        .status(404)
        .json({ status: "fail", message: "Plan not found" });
    }
    res.status(204).json({ status: "success", data: null });
  } catch (err) {
    next(err);
  }
};
