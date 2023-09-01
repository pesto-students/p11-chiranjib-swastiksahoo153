import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import RecommendationsListSkeleton from "./RecommendationsListSkeleton";

function GiftRecommendationsDisplay({ recommendations }) {
  const paperStyle = {
    backgroundColor: "#E6F7FF",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  };

  const listStyle = {
    width: "100%",
    backgroundColor: "#FFFFFF",
  };

  const listItemStyle = {
    borderBottom: "1px solid #E0E0E0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const textFieldStyle = {
    background: "#FFFFFF",
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [savedRecommendations, setSavedRecommendations] = useState([]);
  const filteredRecommendations = React.useMemo(
    () =>
      recommendations.filter((recommendation) =>
        recommendation.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [recommendations, searchTerm]
  );

  // Placeholder function for sharing via email
  const shareViaEmail = () => {
    // Implement email sharing logic here
    alert("Sharing via email...");
  };

  // Placeholder function for sharing on Facebook
  const shareOnFacebook = () => {
    // Implement Facebook sharing logic here
    alert("Sharing on Facebook...");
  };

  // Placeholder function for sharing on Twitter
  const shareOnTwitter = () => {
    // Implement Twitter sharing logic here
    alert("Sharing on Twitter...");
  };

  // Function to add a recommendation to saved recommendations
  const saveRecommendation = (recommendation) => {
    setSavedRecommendations([...savedRecommendations, recommendation]);
  };

  // Function to remove a recommendation from saved recommendations
  const removeSavedRecommendation = (recommendation) => {
    const updatedSavedRecommendations = savedRecommendations.filter(
      (savedItem) => savedItem !== recommendation
    );
    setSavedRecommendations(updatedSavedRecommendations);
  };

  // Function to check if a recommendation is saved
  const isSaved = (recommendation) => {
    return savedRecommendations.includes(recommendation);
  };

  return (
    <Paper style={paperStyle} elevation={3}>
      <Typography
        variant="h5"
        color="textSecondary"
        gutterBottom
        fontWeight={600}
      >
        Gift Recommendations
      </Typography>
      <TextField
        label="Search for a recommendation"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "16px", ...textFieldStyle }}
      />
      {recommendations.length === 0 && <RecommendationsListSkeleton />}
      {recommendations.length > 0 && (
        <List style={listStyle}>
          {filteredRecommendations.map((recommendation, index) => (
            <ListItem key={index} style={listItemStyle}>
              <ListItemText primary={recommendation} />
              {isSaved(recommendation) ? (
                <IconButton
                  onClick={() => removeSavedRecommendation(recommendation)}
                >
                  <BookmarkIcon />
                </IconButton>
              ) : (
                <IconButton onClick={() => saveRecommendation(recommendation)}>
                  <BookmarkBorderIcon />
                </IconButton>
              )}
            </ListItem>
          ))}
        </List>
      )}
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Saved Recommendations
      </Typography>
      <List>
        {savedRecommendations.map((recommendation, index) => (
          <ListItem key={index} style={listItemStyle}>
            <ListItemText primary={recommendation} />
          </ListItem>
        ))}
      </List>
      <div>
        {/* Share buttons */}
        <IconButton onClick={shareViaEmail}>
          <EmailIcon />
        </IconButton>
        <IconButton onClick={shareOnFacebook}>
          <FacebookIcon />
        </IconButton>
        <IconButton onClick={shareOnTwitter}>
          <TwitterIcon />
        </IconButton>
      </div>
    </Paper>
  );
}

export default GiftRecommendationsDisplay;
