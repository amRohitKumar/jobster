import customFetch from "./axios";
import jobs from "../temp";

const addJob = async (job) => {
  await customFetch.post("/jobs", job, {
    headers: {
      authorization: "Bearer #token",
    },
  });
};

const seedData = (data) => {
  data.forEach((item) => {
    addJob(item);
  });
};

seedData(jobs);
