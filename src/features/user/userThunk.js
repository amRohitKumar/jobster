import customFetch from "../../utils/axios";
import authHeader from "../../utils/userAuthHeader";
import { logoutUser } from "./userSlice";
import { clearValues } from "../job/jobSlice";
import { clearAllJobsState } from "../allJobs/allJobsSlice";

export const registerUserThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post("/auth/register", user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post("/auth/login", user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.patch(
      "/auth/updateUser",
      user,
      authHeader(thunkAPI)
    );
    return resp.data;
  } catch (error) {
    console.log(error.response);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser());
    thunkAPI.dispatch(clearValues());
    thunkAPI.dispatch(clearAllJobsState());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
