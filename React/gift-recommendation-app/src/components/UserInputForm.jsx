import React from "react";
import {
  Button,
  Grid,
  Paper,
  Typography,
  FormControl,
  MenuItem,
  TextField,
} from "@mui/material";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import GiftRecommendationFetcher from "./GiftRecommendationFetcher";

const genders = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Other",
    label: "Other",
  },
];

const GiftRecommendationForm = ({
  setRecommendations,
  setFetchingRecommendations,
}) => {
  const handleSubmit = async (values) => {
    const { recipientAge, recipientGender, recipientInterests } = values;

    // Check if any of the fields are empty
    if (!recipientAge || !recipientGender || !recipientInterests) {
      alert("Please fill in all the required fields.");
      return;
    }

    setFetchingRecommendations(true);
    // Assuming GiftRecommendationFetcher is an async function
    const suggestions = await GiftRecommendationFetcher(
      recipientAge,
      recipientGender,
      recipientInterests
    );
    setRecommendations(suggestions);
    setFetchingRecommendations(false);
  };

  return (
    <Paper sx={{ padding: 3 }} elevation={3}>
      <Typography variant="h5">Gift Recommendation Form</Typography>

      <Formik
        initialValues={{
          recipientAge: "",
          recipientGender: "",
          recipientInterests: "",
        }}
        // Set up validation schema using Yup
        validationSchema={Yup.object({
          recipientAge: Yup.number()
            .required("Age is mandatory")
            .min(0, "Age must be at least 0")
            .max(100, "Age must be at most 100"),
          recipientGender: Yup.string().required("Gender is mandatory"),
          recipientInterests: Yup.string()
            .required("Interests are mandatory")
            .min(3, "Interests should be at least 3 characters long"),
        })}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <FormControl>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    data-testid="gender-select"
                    as={TextField}
                    error={touched.recipientGender && !!errors.recipientGender}
                    helperText={
                      touched.recipientGender && errors.recipientGender
                    }
                    fullWidth
                    name="recipientGender"
                    label="Recipient's Gender"
                    variant="outlined"
                    select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.recipientGender}
                  >
                    {genders.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                        data-testid={option.value}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="recipientGender"
                    component="div"
                    className="error-message"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    error={touched.recipientAge && !!errors.recipientAge}
                    helperText={touched.recipientAge && errors.recipientAge}
                    fullWidth
                    name="recipientAge"
                    type="number"
                    label="Recipient's Age"
                    variant="outlined"
                    inputProps={{ min: 0, max: 100 }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.recipientAge}
                  />
                  <ErrorMessage
                    name="recipientAge"
                    component="div"
                    className="error-message"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    error={
                      touched.recipientInterests && !!errors.recipientInterests
                    }
                    helperText={
                      touched.recipientInterests && errors.recipientInterests
                    }
                    fullWidth
                    name="recipientInterests"
                    label="Recipient's Interests"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.recipientInterests}
                  />
                  <ErrorMessage
                    name="recipientInterests"
                    component="div"
                    className="error-message"
                  />
                </Grid>
              </Grid>
              <Button
                sx={{ marginTop: 2 }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Get Gift Recommendations
              </Button>
            </FormControl>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default GiftRecommendationForm;
