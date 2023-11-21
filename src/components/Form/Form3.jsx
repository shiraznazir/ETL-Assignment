import React, { useEffect } from "react";
import style from "./FormStyle";
import StatementBox from "../common/StatementBox";
import { Box } from "@mui/material";
import { useErrorContext } from "../../context/ErrorContext";

let inputData = [
  "1. Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?",
  "2. Tell me about the last time something significant didn’t go according to plan at work. What was your role? What was the outcome?",
  "3.  What are the three things that are most important to you in a job?",
];

const Form3 = () => {
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
          <StatementBox
            key={index + 1}
            index={index}
            label={item}
            data={data}
            setData={setData}
            error={error}
          />
        ))}
      </Box>
    </>
  );
};

export default Form3;
