import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo on the left */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Workout Planner
        </Typography>

        {/* Buttons on the right */}
        <Button color="inherit">Saved Plans</Button>
        <Button color="inherit">New Plan</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
