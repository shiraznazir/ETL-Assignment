import React, { useEffect } from "react";
import style from "./FormStyle";
import { Box } from "@mui/material";
import UploadFile from "../common/UploadFile";
import { useErrorContext } from "../../context/ErrorContext";

let inputData = [
  "1. 10th Marksheet*",
  "2. 12th Marksheet*",
  "3. Graduation Marksheet*",
  "4. Post Graduation Marksheet",
  "5. Offer Letter*",
  "6. Salary Slips*",
  "7. Bank Statement*",
  "8. Increment Letter (if any)",
  "9. Others (if any)",
];

const Form2 = () => {
  const { data, setData, error } = useErrorContext();

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
        {inputData?.map((item, index) => (
          <UploadFile
            key={index + 1}
            index={index}
            label={item}
            data={data}
            setData={setData}
            errorMsg={error}
          />
        ))}
      </Box>
    </>
  );
};

export default Form2;
