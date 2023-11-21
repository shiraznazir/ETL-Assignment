import { Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AttachmentIcon from "@mui/icons-material/Attachment";

const UploadFile = ({ index, label, data, setData, errorMsg }) => {
  const [error, setError] = useState("");
  const [val, setVal] = useState("");

  useEffect(() => {
    let fileName = "";
    if (index === 0) {
      setError(errorMsg?.class_10th_marksheet);
      fileName = data?.class_10th_marksheet?.name;
    } else if (index === 1) {
      setError(errorMsg?.class_12th_marksheet);
      fileName = data?.class_12th_marksheet?.name;
    } else if (index === 2) {
      setError(errorMsg?.graduation_marksheet);
      fileName = data?.graduation_marksheet?.name;
    } else if (index === 3) {
      fileName = data?.post_graduation_marksheet?.name;
    } else if (index === 4) {
      setError(errorMsg?.offer_letter);
      fileName = data?.offer_letter?.name;
    } else if (index === 5) {
      setError(errorMsg?.salary_slips);
      fileName = data?.salary_slips?.name;
    } else if (index === 6) {
      setError(errorMsg?.bank_statement);
      fileName = data?.bank_statement?.name;
    } else if (index === 7) {
      fileName = data?.increment_letter?.name;
    } else if (index === 8) {
      fileName = data?.others?.name;
    }
    setVal(fileName || "");
  }, [errorMsg, index, data]);

  console.log("fileName ", val);

  const handleFile = (event) => {
    const file = event.target.files[0];
    if (index === 0) {
      setData({
        ...data,
        class_10th_marksheet: file,
      });
    } else if (index === 1) {
      setData({
        ...data,
        class_12th_marksheet: file,
      });
    } else if (index === 2) {
      setData({ ...data, graduation_marksheet: file });
    } else if (index === 3) {
      setData({ ...data, post_graduation_marksheet: event.target.files[0] });
    } else if (index === 4) {
      setData({ ...data, offer_letter: event.target.files[0] });
    } else if (index === 5) {
      setData({ ...data, salary_slips: event.target.files[0] });
    } else if (index === 6) {
      setData({ ...data, bank_statement: event.target.files[0] });
    } else if (index === 7) {
      setData({ ...data, increment_letter: event.target.files[0] });
    } else if (index === 8) {
      setData({ ...data, others: event.target.files[0] });
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="p" className="heading">
        {label}
      </Typography>
      <TextField
        sx={{ mt: "5px", width: "70%" }}
        required
        id="outlined-required"
        type="file"
        defaultValue={val}
        onChange={handleFile}
        inputProps={{
          accept: ".pdf, .doc, .docx",
        }}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          startAdornment: (
            <AttachmentIcon sx={{ mr: 2 }} color="action" fontSize="medium" />
          ),
        }}
        error={Boolean(error)}
        helperText={error && error}
        placeholder="Choose file (up to 5KB)"
        fullWidth
      />
    </Box>
  );
};

export default UploadFile;
