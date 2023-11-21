import { Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const StatementBox = ({ index, label, data, setData, error }) => {
  const [val, setVal] = useState("");
  const [errorValue, setErrorValue] = useState("");

  useEffect(() => {
    let value = "";
    let err = "";
    if (index === 0) {
      value = data?.ques_no_01;
      err = error?.ques_no_01;
    } else if (index === 1) {
      value = data?.ques_no_02;
      err = error?.ques_no_02;
    } else if (index === 2) {
      value = data?.ques_no_03;
      err = error?.ques_no_03;
    }
    setVal(value);
    setErrorValue(err);
  }, [data, error]);

  const handleInput = (e) => {
    let value = e.target.value;
    if (index === 0) {
      if (value.length <= 300) {
        setData({ ...data, ques_no_01: value });
      }
    } else if (index === 1) {
      if (value.length <= 300) {
        setData({ ...data, ques_no_02: value });
      }
    } else if (index === 2) {
      if (value.length <= 300) {
        setData({ ...data, ques_no_03: value });
      }
    }
  };

  return (
    <>
      <Box sx={{ my: 2 }}>
        <Typography variant="p" className="heading">
          {label}
        </Typography>
        <TextField
          sx={{ mt: "5px" }}
          value={val}
          onChange={handleInput}
          multiline
          rows={4}
          placeholder="Enter a description for the long answer"
          fullWidth
          inputProps={{ maxLength: 300 }}
          error={Boolean(errorValue)}
          helperText={errorValue && errorValue}
        />
        <Box textAlign="right">
          <span className="span-text">300 word limit</span>
        </Box>
      </Box>
    </>
  );
};

export default StatementBox;
