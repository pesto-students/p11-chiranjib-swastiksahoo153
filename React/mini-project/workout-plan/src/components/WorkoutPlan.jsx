import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import weekDays from "../constants/weekDays";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const WorkoutDayPlan = () => {
  const day = parseInt(useParams().day);
  const curPlan = useSelector((state) => state.workoutPlan.plan.days[day]);
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        {weekDays[day]}
      </Typography>
      <List>
        {curPlan.exercises.map((exercise, index) => (
          <Paper
            key={index}
            elevation={3}
            style={{ margin: "10px auto", padding: "10px", width: "40%" }}
          >
            <ListItem>
              <ListItemText
                primary={
                  <Typography
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    {exercise.name}
                  </Typography>
                }
                secondary={
                  <div style={{ marginLeft: "20px" }}>
                    <Typography variant="body2" color="textSecondary">
                      Repetitions: {exercise.reps}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Sets: {exercise.sets}
                    </Typography>
                  </div>
                }
              />
            </ListItem>
          </Paper>
        ))}
      </List>
    </div>
  );
};

export default WorkoutDayPlan;
