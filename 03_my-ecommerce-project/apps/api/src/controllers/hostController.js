const Host = require("../models/Host");

exports.getAllHosts = async (req, res, next) => {
  try {
    const { personality, host_status } = req.query;
    const filter = {};
    if (personality) filter.personality = personality;
    if (host_status) filter.host_status = host_status;

    const hosts = await Host.find(filter);
    res.status(200).json({ status: "success", data: hosts });
  } catch (err) {
    next(err);
  }
};

exports.getHostById = async (req, res, next) => {
  try {
    const host = await Host.findById(req.params.id);
    if (!host) {
      return res
        .status(404)
        .json({ status: "fail", message: "Host not found" });
    }
    res.status(200).json({ status: "success", data: host });
  } catch (err) {
    next(err);
  }
};

exports.createHost = async (req, res, next) => {
  try {
    const host = await Host.create(req.body);
    res.status(201).json({ status: "success", data: host });
  } catch (err) {
    next(err);
  }
};

exports.updateHost = async (req, res, next) => {
  try {
    const host = await Host.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!host) {
      return res
        .status(404)
        .json({ status: "fail", message: "Host not found" });
    }
    res.status(200).json({ status: "success", data: host });
  } catch (err) {
    next(err);
  }
};

exports.deleteHost = async (req, res, next) => {
  try {
    const host = await Host.findByIdAndDelete(req.params.id);
    if (!host) {
      return res
        .status(404)
        .json({ status: "fail", message: "Host not found" });
    }
    res.status(204).json({ status: "success", data: null });
  } catch (err) {
    next(err);
  }
};

exports.getActiveHosts = async (req, res, next) => {
  try {
    const hosts = await Host.find({ host_status: "active" });
    res.status(200).json({ status: "success", data: hosts });
  } catch (err) {
    next(err);
  }
};
