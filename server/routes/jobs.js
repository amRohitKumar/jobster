import express from "express";
const router = express.Router();
import User from "../models/user.js";
import Job from "../models/job.js";
import moment from "moment";
import mongoose from "mongoose";
import isLogin from "../middlewares/auth.js";

router.get("/", isLogin, async (req, res) => {
  const { status, jobType, sort, search } = req.query;
  const queryObject = {
    createdBy: req.user.userId,
  };
  if (status && status !== "all") {
    queryObject.status = status;
  }
  if (jobType && jobType !== "all") {
    queryObject.jobType = jobType;
  }
  if (search) {
    queryObject.position = { $regex: search, $options: "i" };
  }
  let result = Job.find(queryObject);
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("position");
  }
  if (sort === "z-a") {
    result = result.sort("-position");
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  const jobs = await result;

  const totalJobs = await Job.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);

  res.status(200).json({ jobs, totalJobs, numOfPages });
});

router.post("/", isLogin, async (req, res) => {
  console.log(req.body);
  const { position, company } = req.body;
  if (!position || !company) {
    return res.status(400).send({ msg: "Please provide all values" });
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(200).json({ job });
});

router.get("/stats", isLogin, async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: {
          year: { $year: { date: "$createdAt", timezone: "+05:30" } },
          month: { $month: { date: "$createdAt", timezone: "+05:30" } },
        },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);
  const currEpoch = moment().format("YYYY-MM-DD");
  let upcomingInterviews = await Job.aggregate([
    {
      $match: {
        createdBy: mongoose.Types.ObjectId(req.user.userId),
        status: "interview",
        interviewDate: { $gte: currEpoch },
      },
    },
    {
      $group: {
        _id: {
          year: {
            $year: { $dateFromString: { dateString: "$interviewDate" } },
          },
          month: {
            $month: { $dateFromString: { dateString: "$interviewDate" } },
          },
          date: {
            $dayOfMonth: { $dateFromString: { dateString: "$interviewDate" } },
          },
        },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);

  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = moment()
        .month(month - 1)
        .year(year)
        .format("MMM Y");
      return { date, count };
    })
    .reverse();

  upcomingInterviews = upcomingInterviews.map((item) => {
    const {
      _id: { year, month, date },
      count,
    } = item;
    const time = moment()
      .month(month-1)
      .year(year)
      .date(date)
      .format("YYYY-MM-DD")
    return { time, count };
  });
  console.log(upcomingInterviews);
  res.status(200).json({ defaultStats, monthlyApplications, upcomingInterviews });
});

router.delete("/:id", isLogin, async (req, res) => {
  const { id: jobId } = req.params;
  const job = await Job.findOne({ _id: jobId });

  if (!job) {
    return res.send(400).json({ msg: "No job found !" });
  }
  if (req.user.userId !== job.createdBy.toString())
    return res
      .status(400)
      .json({ msg: "You don't have permission to do this !" });
  await job.remove();

  res.status(200).json({ msg: "Success! Job removed" });
});

router.patch("/:id", isLogin, async (req, res) => {
  const { id: jobId } = req.params;
  const { company, position } = req.body;

  if (!position || !company) {
    return res.status(400).json({ msg: "Please provide all values" });
  }
  const job = await Job.findOne({ _id: jobId });

  if (!job) {
    return res.status(400).json({ msg: "No job found" });
  }
  // check permissions
  if (req.user.userId !== job.createdBy.toString())
    return res
      .status(400)
      .json({ msg: "You don't have permission to do this !" });

  const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ updatedJob });
});

export default router;
