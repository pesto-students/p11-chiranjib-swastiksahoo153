import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workoutInfo: [],
};

const workoutInfoSlice = createSlice({
  name: "workoutInfo",
  initialState,
  reducers: {
    setWorkoutInfo: (state, action) => {
      return { ...state, workoutInfo: action.payload };
    },
  },
});

export const { setWorkoutInfo } = workoutInfoSlice.actions;
export default workoutInfoSlice.reducer;
