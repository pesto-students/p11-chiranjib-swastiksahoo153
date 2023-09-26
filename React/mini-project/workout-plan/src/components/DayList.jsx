import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const DayList = ({ days }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    margin: "0 auto",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "16px",
  };

  const defaultListItemStyle = {
    cursor: "pointer",
    padding: "8px",
    margin: "4px 0", // Add margin to create space between list items
    textDecoration: "none",
    color: "white",
    backgroundColor: "#007BFF",
    borderRadius: "4px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.2s, transform 0.2s, box-shadow 0.2s",
  };

  const hoverListItemStyle = {
    backgroundColor: "#0056b3",
    transform: "scale(1.02)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Workout Plan</h2>
      <List>
        {days.map((day, index) => (
          <ListItem
            key={index}
            button
            component={Link}
            to={`/day/${day}`}
            style={
              index === hoveredIndex
                ? { ...defaultListItemStyle, ...hoverListItemStyle }
                : defaultListItemStyle
            }
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <ListItemText primary={day} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DayList;
