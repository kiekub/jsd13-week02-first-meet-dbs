const Session = require("../models/Session");

exports.getAllSessions = async (req, res, next) => {
  try {
    const { confirmation_status, bedtime_status, wake_status } = req.query;
    const filter = {};
    if (confirmation_status) filter.confirmation_status = confirmation_status;
    if (bedtime_status) filter.bedtime_status = bedtime_status;
    if (wake_status) filter.wake_status = wake_status;

    const sessions = await Session.find(filter).populate(
      "booking_id",
      "booking_status schedule"
    );
    res.status(200).json({ status: "success", data: sessions });
  } catch (err) {
    next(err);
  }
};

exports.getSessionById = async (req, res, next) => {
  try {
    const session = await Session.findById(req.params.id).populate(
      "booking_id",
      "booking_status schedule user_id host_id"
    );
    if (!session) {
      return res
        .status(404)
        .json({ status: "fail", message: "Session not found" });
    }
    res.status(200).json({ status: "success", data: session });
  } catch (err) {
    next(err);
  }
};

exports.createSession = async (req, res, next) => {
  try {
    const session = await Session.create(req.body);
    const populated = await Session.findById(session._id).populate(
      "booking_id",
      "booking_status schedule"
    );
    res.status(201).json({ status: "success", data: populated });
  } catch (err) {
    next(err);
  }
};

exports.updateSession = async (req, res, next) => {
  try {
    const session = await Session.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate("booking_id", "booking_status schedule");
    if (!session) {
      return res
        .status(404)
        .json({ status: "fail", message: "Session not found" });
    }
    res.status(200).json({ status: "success", data: session });
  } catch (err) {
    next(err);
  }
};

exports.deleteSession = async (req, res, next) => {
  try {
    const session = await Session.findByIdAndDelete(req.params.id);
    if (!session) {
      return res
        .status(404)
        .json({ status: "fail", message: "Session not found" });
    }
    res.status(204).json({ status: "success", data: null });
  } catch (err) {
    next(err);
  }
};

exports.getSessionsByBooking = async (req, res, next) => {
  try {
    const sessions = await Session.find({ booking_id: req.params.bookingId });
    res.status(200).json({ status: "success", data: sessions });
  } catch (err) {
    next(err);
  }
};
