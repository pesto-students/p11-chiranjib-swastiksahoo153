import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  TextField,
  Container,
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
} from "@mui/material";
import { setWorkoutPlan } from "../redux/workoutPlanSlice";

function WorkoutPlanForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    goal: "",
    frequency: "",
    duration: "",
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation checks
    const newErrors = {};

    if (!formData.goal) {
      newErrors.goal = "Goal is required";
    }

    if (!formData.frequency) {
      newErrors.frequency = "Frequency is required";
    }

    if (!formData.duration) {
      newErrors.duration = "Duration is required";
    } else if (isNaN(formData.duration) || formData.duration <= 0) {
      newErrors.duration = "Duration must be a positive number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShowAlert(true);
    } else {
      setShowAlert(false);
      dispatch(setWorkoutPlan(formData));
    }
  };

  return (
    <Container maxWidth="sm">
      <h1>Workout Plan Form</h1>
      <form onSubmit={handleSubmit}>
        <Box marginBottom={2}>
          <FormControl fullWidth required error={!!errors.goal}>
            <InputLabel>Goal</InputLabel>
            <Select
              label="Goal"
              name="goal"
              value={formData.goal}
              onChange={handleInputChange}
            >
              <MenuItem value="">Select Goal</MenuItem>
              <MenuItem value="muscle-building">Muscle Building</MenuItem>
              <MenuItem value="weight-loss">Weight Loss</MenuItem>
              <MenuItem value="cardio">Cardio</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box marginBottom={2}>
          <FormControl fullWidth required error={!!errors.frequency}>
            <InputLabel>Weekly Frequency</InputLabel>
            <Select
              label="Weekly Frequency"
              name="frequency"
              value={formData.frequency}
              onChange={handleInputChange}
            >
              <MenuItem value="">Select Frequency</MenuItem>
              <MenuItem value="1">1 time</MenuItem>
              <MenuItem value="2">2 times</MenuItem>
              <MenuItem value="3">3 times</MenuItem>
              <MenuItem value="4">4 times</MenuItem>
              <MenuItem value="5">5 times</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box marginBottom={2}>
          <TextField
            label="Average Duration (minutes)"
            name="duration"
            type="number"
            value={formData.duration}
            onChange={handleInputChange}
            fullWidth
            required
            error={!!errors.duration}
            helperText={errors.duration}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      {showAlert && (
        <Alert severity="error" style={{ marginTop: "16px" }}>
          Please correct the errors in the form.
        </Alert>
      )}
    </Container>
  );
}

export default WorkoutPlanForm;
