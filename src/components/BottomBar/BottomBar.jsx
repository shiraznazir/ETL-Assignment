import React from "react";
import style from "./BottomStyle";
import { BottomNavigation, Box, Button, Paper } from "@mui/material";
import {
  useFormContext,
  useCandidateContext,
  useErrorContext,
} from "../../context";

const BottomBar = () => {
  const [options, setOptions] = useFormContext();
  const { validateForm } = useErrorContext();

  const handleOptions = () => {
    const validate = validateForm();
    if (validate) {
      setOptions((prevOptions) => Math.min(prevOptions + 1, 4));
    }
  };

  return (
    <>
      <Paper sx={style.bottomContainer} elevation={10}>
        <BottomNavigation sx={style.bottomNav}>
          <Box align="right" sx={style.btnBox}>
            <Button onClick={handleOptions} align="right" variant="contained">
              Next
            </Button>
          </Box>
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default BottomBar;
