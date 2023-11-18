import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
const Header = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff" }}>
      <AppBar sx={{ bgcolor: "#fff" }}>
        <Toolbar>{/* <h1>Hello</h1> */}</Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
