import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import UserInfoForm from "./components/UserInfoForm";
import WorkoutPlanForm from "./components/WorkoutPlanForm";
import { Provider } from "react-redux";
import store from "./redux/store";
import DayList from "./components/DayList";
import WorkoutDayPlan from "./components/WorkoutPlan";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />;
        <Router>
          <Routes>
            <Route path="/" element={<UserInfoForm />} />
            <Route path="/workout" element={<WorkoutPlanForm />} />
            <Route
              path="/schedule"
              element={<DayList days={["Monday", "Tuesday"]} />}
            />
            <Route
              path="/workout-plan"
              element={
                <WorkoutDayPlan
                  day="Monday"
                  exercises={[{ name: "Pull-ups", repetitions: 10, sets: 3 }]}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
