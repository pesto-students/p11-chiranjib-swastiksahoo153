import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box, // Import Box component for spacing
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "../redux/userInfoSlice";

function UserInfoForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
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

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (isNaN(formData.age) || formData.age <= 0) {
      newErrors.age = "Age must be a positive number";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShowAlert(true);
    } else {
      setShowAlert(false);
      // Handle form submission logic here
      dispatch(setUserInfo(formData));
      navigate("/workout");
    }
  };

  return (
    <Container maxWidth="sm">
      <h1>User Info Form</h1>
      <form onSubmit={handleSubmit}>
        <Box marginBottom={2}>
          {" "}
          {/* Add margin bottom */}
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            required
            error={!!errors.name}
            helperText={errors.name}
          />
        </Box>
        <Box marginBottom={2}>
          {" "}
          {/* Add margin bottom */}
          <TextField
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleInputChange}
            fullWidth
            required
            error={!!errors.age}
            helperText={errors.age}
          />
        </Box>
        <Box marginBottom={2}>
          {" "}
          {/* Add margin bottom */}
          <FormControl fullWidth required error={!!errors.gender}>
            <InputLabel>Gender</InputLabel>
            <Select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <MenuItem value="">Select Gender</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Next
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

export default UserInfoForm;
