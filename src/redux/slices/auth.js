import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authLogin } from "../../utils/https/auth";

const initialState = {
  token: null,
  data: {
    id: null,
    display_name: null,
    phone: null,
    address: null,
    role: null,
  },
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
  err: null,
};

const loginThunk = createAsyncThunk(
  "user/login",
  async ({ email, password }, controller) => {
    try {
      const response = await authLogin(email, password, controller);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authLogout: () => {
      return initialState;
    },
  },
  extraReducers: {
    [loginThunk.pending]: (prevState) => {
      return {
        ...prevState,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    },
    [loginThunk.fulfilled]: (prevState, action) => {
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
        token: action.payload.token || null,
        data: {
          id: action.payload.id,
          display_name: action.payload.display_name,
          phone: action.payload.phone,
          address: action.payload.address,
          role: action.payload.role_id,
        },
      };
    },
    [loginThunk.rejected]: (prevState, action) => {
      return {
        ...prevState,
        isLoading: false,
        isRejected: true,
        err: action.payload,
      };
    },
  },
});

export const userAction = { ...userSlice.actions, loginThunk };
export default userSlice.reducer;
