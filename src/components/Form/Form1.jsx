import React, { useEffect, useRef, useState } from "react";
import style from "./FormStyle";
import { Box, TextField, Typography, useStepContext } from "@mui/material";
import CustomDatePicker from "../common/CustomDatePicker";
import { useErrorContext } from "../../context/ErrorContext";

const Form1 = () => {
  const { data, setData, error } = useErrorContext();
  const [validation, setValidation] = useState();

  const handleDate = (params) => {
    setData({ ...data, dob: params });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    let email = e.target.value;
    const validate = validateEmail(email);
    if (!validate) {
      setValidation({ ...validation, email: "Invalid email" });
    } else {
      setValidation({ ...validation, email: "" });
    }
    setData({ ...data, email: email });
  };

  const handlePhoneChange = (e) => {
    const phone = e.target.value;
    if (phone.length > 10) {
      setValidation({ ...validation, phone: "Invalid phone number" });
    } else {
      setValidation({ ...validation, phone: "" });
    }
    setData({ ...data, mobileNo: phone });
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
    <>
      <Box sx={style.container}>
        <Box>
          <Typography variant="p" className="heading">
            1.Name*
          </Typography>
          <TextField
            sx={{ mt: "5px" }}
            required
            id="outlined-required"
            placeholder="Enter your name"
            value={data?.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            error={error?.name}
            helperText={error?.name && error?.name}
            inputProps={{ maxLength: 30 }}
            fullWidth
          />
        </Box>
        <Box>
          <Typography variant="p" className="heading">
            2.Email*
          </Typography>
          <TextField
            sx={{ mt: "5px" }}
            required
            value={data?.email}
            onChange={handleEmailChange}
            error={error?.email || validation?.email}
            helperText={
              (error?.email && error?.email) ||
              (validation?.email && validation?.email)
            }
            inputProps={{ maxLength: 35 }}
            id="outlined-required"
            placeholder="userid@gmail.com"
            fullWidth
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="p" className="heading">
            3. Date of Birth
          </Typography>
          <CustomDatePicker
            disableFuture={true}
            date={data?.dob}
            handleDate={handleDate}
          />
        </Box>
        <Box>
          <Typography variant="p" className="heading">
            4. Contact No
          </Typography>
          <TextField
            sx={{ mt: "5px" }}
            required
            type="number"
            value={data?.mobileNo}
            onChange={handlePhoneChange}
            error={validation?.phone}
            helperText={validation?.phone && validation?.phone}
            id="outlined-required"
            placeholder="Enter your 10 digit contact no"
            fullWidth
          />
        </Box>
      </Box>
    </>
  );
};

export default Form1;
