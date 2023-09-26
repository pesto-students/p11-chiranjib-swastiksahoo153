// workoutPlanSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workoutPlan: [],
};

const workoutPlanSlice = createSlice({
  name: "workoutPlan",
  initialState,
  reducers: {
    setWorkoutPlan: (state, action) => {
      return { ...state, workoutPlan: action.payload };
    },
  },
});

export const { setWorkoutPlan } = workoutPlanSlice.actions;
export default workoutPlanSlice.reducer;
