import { Box, Typography } from "@mui/material";
import React from "react";

const Final = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Typography variant="h4" sx={{ color: "green" }}>
        Successfully Submitted
      </Typography>
    </Box>
  );
};

export default Final;
