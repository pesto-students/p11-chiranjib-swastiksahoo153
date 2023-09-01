import React, { lazy, Suspense } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import UserInputForm from "../components/UserInputForm";
const GiftRecommendationsDisplay = lazy(() =>
  import("../components/GiftRecommendationsDisplay")
);

function Home() {
  const [recommendations, setRecommendations] = React.useState([]);
  const [fetchingRecommendations, setFetchingRecommendations] =
    React.useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <UserInputForm
            setRecommendations={setRecommendations}
            setFetchingRecommendations={setFetchingRecommendations}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          {(recommendations.length > 0 || fetchingRecommendations) && (
            <Suspense fallback={<div>Loading...</div>}>
              <GiftRecommendationsDisplay recommendations={recommendations} />
            </Suspense>
          )}
          {!fetchingRecommendations && recommendations.length === 0 && (
            <p>
              Please Select Age, Gender, and Interests to see recommendations
            </p>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
