// userInfoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  age: "",
  gender: "",
  fitnessLevel: "",
  targetMuscleGroups: [],
  workoutDuration: "",
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
