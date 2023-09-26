import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { fetchWorkoutPlanHelper } from "../util";

const planFilePath = "/workoutPlan.json"; //relative to public file path

const initialState = {
  loading: false,
  plan: {
    days: [],
  },
  error: null,
};
// Fetch workout plan
const fetchWorkoutPlan = createAsyncThunk(
  "workoutPlan/fetchWorkout",
  async (preferences) => {
    try {
      return fetchWorkoutPlanHelper(planFilePath);
    } catch (error) {
      return error.message;
    }
  }
);

const workoutSlice = createSlice({
  name: "workoutPlan",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWorkoutPlan.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchWorkoutPlan.fulfilled, (state, action) => {
        state.loading = false;
        state.plan = action.payload;
      })
      .addCase(fetchWorkoutPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export { fetchWorkoutPlan };
export default workoutSlice.reducer;
