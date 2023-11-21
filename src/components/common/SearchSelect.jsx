import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const SearchSelect = ({ options, value, handleData, error }) => {
  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        value={value}
        onChange={handleData}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              mt: "5px",
              ...(error && {
                borderColor: "#f44336",
              }),
            }}
            fullWidth
            error={Boolean(error)}
            helperText={error && error}
          />
        )}
      />
    </div>
  );
};

export default SearchSelect;
