import React, { useEffect, useRef, useState } from "react";
import style from "./FormStyle";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Box, TextField, Typography } from "@mui/material";
import SearchSelect from "../common/SearchSelect";
import SearchIcon from "@mui/icons-material/Search";
import CustomDatePicker from "../common/CustomDatePicker";
import { useErrorContext } from "../../context/ErrorContext";
import useTimeZone from "../../helper/useTimeZone";

const interviewMedium = [
  { label: "Zoom", value: "Zoom" },
  { label: "Google Meet", value: "Google Meet" },
  { label: "Skype", value: "Skype" },
  { label: "Discord", value: "Discord" },
];

const Form4 = () => {
  const { data, setData, error } = useErrorContext();
  const [emailValidation, setEmailValidation] = useState("");
  const timeZones = useTimeZone();
  const inputRef = useRef(null);
  const autoCompleteRef = useRef(null);
  const options = {
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["address"],
  };

  useEffect(() => {
    if (inputRef.current && !autoCompleteRef.current) {
      autoCompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        options
      );
      autoCompleteRef.current.addListener("place_changed", () => {
        const place = autoCompleteRef.current.getPlace();
        if (place) {
          setData({ ...data, location: inputRef.current.value });
        }
      });
    }
  }, [inputRef, autoCompleteRef, options, data, setData]);

  const handleDate = (params) => {
    setData({ ...data, interview_date: params });
  };

  const handleTimeZone = (e) => {
    setData({ ...data, time_zone: timeZones[e.target.value] });
  };

  const handleInterviewMedium = (e) => {
    setData({ ...data, interview_medium: interviewMedium[e.target.value] });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    let email = e.target.value;
    const validate = validateEmail(email);
    if (!validate) {
      setEmailValidation("Invalid email");
    } else {
      setEmailValidation("");
    }
    setData({ ...data, work_email: email });
  };

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
    return () => {
      window.removeEventListener("scroll", scrollToTop);
    };
  }, []);
  
  return (
    <Box sx={style.container}>
      <Box>
        <Typography variant="p" className="heading">
          1. Email*
        </Typography>
        <TextField
          sx={{ mt: "5px" }}
          required
          value={data?.work_email}
          onChange={handleEmailChange}
          error={Boolean(error?.work_email || emailValidation)}
          helperText={
            (error?.work_email && error?.work_email) ||
            (emailValidation && emailValidation)
          }
          id="outlined-required"
          placeholder="Enter a valid email address"
          fullWidth
        />
      </Box>
      <Box sx={{ position: "relative" }}>
        <Typography variant="p" className="heading">
          2. Location*
        </Typography>
        <TextField
          sx={{ mt: "5px" }}
          inputRef={inputRef}
          required
          value={data?.location}
          onChange={(e) => setData({ ...data, location: e.target.value })}
          id="outlined-required"
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ mr: 2 }} color="action" fontSize="medium" />
            ),
          }}
          error={error?.location}
          helperText={error?.location && error?.location}
          placeholder="Search or enter your location "
          fullWidth
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="p" className="heading">
          3. Interview Date
        </Typography>
        <CustomDatePicker
          disablePast={true}
          date={data?.interview_date}
          error={error?.interview_date}
          handleDate={handleDate}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="p" className="heading">
          4. Interview Time
        </Typography>
        <TextField
          sx={style.timePicker}
          type="time"
          defaultValue={data?.interview_time}
          onChange={(newValue) =>
            setData({ ...data, interview_time: newValue })
          }
          format="hh:mm:a"
          error={Boolean(error?.interview_time)}
          helperText={error?.interview_time && error?.interview_time}
        />
      </Box>
      <Box>
        <Typography variant="p" className="heading">
          5. Time Zone
        </Typography>
        <SearchSelect
          options={timeZones}
          value={data?.time_zone}
          data={data}
          handleData={handleTimeZone}
          error={error?.time_zone}
        />
      </Box>
      <Box>
        <Typography variant="p" className="heading">
          6. Interview Medium
        </Typography>
        <SearchSelect
          options={interviewMedium}
          value={data?.interview_medium}
          data={data}
          handleData={handleInterviewMedium}
          error={error?.interview_medium}
        />
      </Box>
    </Box>
  );
};

export default Form4;
