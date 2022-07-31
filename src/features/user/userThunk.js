import customFetch from "../../utils/axios";
import authHeader from "../../utils/userAuthHeader";

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
