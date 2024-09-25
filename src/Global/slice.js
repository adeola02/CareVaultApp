import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
  userSignUp: {},
  loggedInUser: false,
};

export const recordApp = createSlice({
  name: "recordApp",
  initialState,
  reducers: {
    appUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setMedicalRecords: (state, action) => {
      state?.user?.medicalRecords.push(action.payload);
    },
    userInfo: (state, action) => {
      state.userSignUp = action.payload;
    },
    userLoggedIn: (state, action) => {
      state.loggedInUser = action.payload;
    },
  },
});

export const { appUser, setToken, setMedicalRecords, userInfo, userLoggedIn } =
  recordApp.actions;

export default recordApp.reducer;
