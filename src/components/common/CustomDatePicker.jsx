import { TextField } from "@mui/material";

const CustomDatePicker = ({
  date,
  handleDate,
  error,
  disablePast,
  disableFuture,
}) => {
  return (
    <TextField
      id="date"
      sx={{
        mt: "5px",
        width: "50%",
        "& .MuiOutlinedInput-input": {
          cursor: "pointer",
          borderColor: "#FF0000",
        },
        "& .MuiInputLabel-root.Mui-focused": {
      
        },
        "& .MuiInputLabel-root": {
          cursor: "pointer",
        },
        "@media (max-width: 1024px)": {
          width: "100%",
        },
      }}
      type="date"
      InputLabelProps={{ shrink: true }}
      InputProps={{
        inputProps: {
          max: disableFuture ? "2010-12-31" : undefined,
        },
      }}
      disablePast={disablePast}
      defaultValue={date}
      onChange={(event) => handleDate(event.target.value)}
      error={Boolean(error)}
      helperText={error}
    />
  );
};

export default CustomDatePicker;
