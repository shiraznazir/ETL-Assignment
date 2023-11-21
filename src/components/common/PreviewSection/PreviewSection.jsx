import React from "react";
import style from "./PreviewStyle";
import { Box, Typography } from "@mui/material";

const PreviewSection = ({ children }) => {
  return (
    <>
      <Box sx={style.outerContainer}>
        <Typography variant="p" className="heading2">
          Preview
        </Typography>
        <Typography variant="p" className="heading">
          You will be able to customize the fields in the later stage
        </Typography>
        <Box sx={style.mainBox}>
          <Box sx={style.innerBox}>
            <Typography variant="p" className="heading2">
              Name of the Enquiry Form
            </Typography>
            <Typography
              variant="p"
              className="heading3"
              sx={{ color: "#595959", mt: "5px" }}
            >
              One line description of the form
            </Typography>
            <Typography variant="p" className="heading3" sx={{ mt: "25px" }}>
              Provide the following information to process your application
            </Typography>
          </Box>
          <Box sx={style.formBox}>{children}</Box>
        </Box>
      </Box>
    </>
  );
};

export default PreviewSection;
