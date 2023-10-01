// store.js
import { configureStore } from "@reduxjs/toolkit";

import userInfoReducer from "./userInfoSlice";
import workoutInfoReducer from "./workoutInfoSlice";
import workoutPlanReducer from "./workoutPlanSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    workoutInfo: workoutInfoReducer,
    workoutPlan: workoutPlanReducer,
  },
});

export default store;
