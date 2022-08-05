import express from "express";
const router = express.Router();

import isLogin from "../middlewares/auth.js";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getStats,
  updateJob,
} from "../controllers/userController.js";
import checkTestUser from "../middlewares/testUser.js";

router
  .route("/")
  .get(isLogin, getAllJobs)
  .post(isLogin, checkTestUser, createJob);

router.route("/stats").get(isLogin, getStats);

router
  .route("/:id")
  .patch(isLogin, checkTestUser, updateJob)
  .delete(isLogin, checkTestUser, deleteJob);

export default router;
