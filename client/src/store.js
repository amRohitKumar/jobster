import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import jobSlice from "./features/job/jobSlice";
import allJobjsSlice from "./features/allJobs/allJobsSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobjsSlice,
  },
});

export default store;
