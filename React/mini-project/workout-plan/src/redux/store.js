// store.js
import { configureStore } from "@reduxjs/toolkit";

import userInfoReducer from "./userInfoSlice";
import workoutPlanReducer from "./workoutPlanSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    workoutPlan: workoutPlanReducer,
  },
});

export default store;
