import { createContext, useContext, useState } from "react";
import { useFormContext } from "./FormContext"
import dayjs from "dayjs";
const CreateErrorContext = createContext();

let defaultVaue = {
  // form 1
  name: "",
  email: "",
  dob: dayjs(""),
  mobileNo: "",
  // form 2
  class_10th_marksheet: "",
  class_12th_marksheet: "",
  graduation_marksheet: "",
  post_graduation_marksheet: "",
  offer_letter: "",
  salary_slips: "",
  bank_statement: "",
  increment_letter: "",
  others: "",
  // form 3
  ques_no_01: "",
  ques_no_02: "",
  ques_no_03: "",
  // form 4
  work_email: "",
  location: "",
  interview_date: "",
  interview_time: "",
  time_zone: "",
  interview_medium: "",
}

export const ErrorContext = ({ children }) => {
  const [options] = useFormContext();
  const [data, setData]= useState(defaultVaue);
  const [error, setError] = useState({});

  const validateForm = () => {
    let newError = {};
    let validate = true;
    if(options === 0){
      if (data?.name === "") {
        validate = false;
        newError = { ...newError, name: "Name is required" };
      }
      if (data?.email === "") {
        validate = false;
        newError = { ...newError, email: "Email is required" };
      }
    }else if(options === 1){
      if (data?.class_10th_marksheet === "") {
        validate = false;
        newError = { ...newError, class_10th_marksheet: "10th marksheet is required" };
      }
      if (data?.class_12th_marksheet === "") {
        validate = false;
        newError = { ...newError, class_12th_marksheet: "12th marksheet is required" };
      }
      if (data?.graduation_marksheet === "") {
        validate = false;
        newError = { ...newError, graduation_marksheet: "Graduation marksheet is required" };
      }
      if (data?.offer_letter === "") {
        validate = false;
        newError = { ...newError, offer_letter: "Offer Letter is required" };
      }
      if (data?.salary_slips === "") {
        validate = false;
        newError = { ...newError, salary_slips: "Salary slips is required" };
      }
      if (data?.bank_statement === "") {
        validate = false;
        newError = { ...newError, bank_statement: "Bank statement is required" };
      }
    }else if(options === 2){
      if (data?.ques_no_01 === "") {
        validate = false;
        newError = { ...newError, ques_no_01: "Required" };
      }
      if (data?.ques_no_02 === "") {
        validate = false;
        newError = { ...newError, ques_no_02: "Required" };
      }
      if (data?.ques_no_03 === "") {
        validate = false;
        newError = { ...newError, ques_no_03: "Required" };
      }
    }else if(options === 3){
      if (data?.work_email === "") {
        validate = false;
        newError = { ...newError, work_email: "Email is required" };
      }
      if (data?.location === "") {
        validate = false;
        newError = { ...newError, location: "Location is required" };
      }
      if (data?.interview_date === "") {
        validate = false;
        newError = { ...newError, interview_date: "Interview Date is required" };
      }
      if (data?.interview_time === "") {
        validate = false;
        newError = { ...newError, interview_time: "Interview Time is required" };
      }
      if (data?.time_zone === "") {
        validate = false;
        newError = { ...newError, time_zone: "Time zone is required" };
      }
      if (data?.interview_medium === "") {
        validate = false;
        newError = { ...newError, interview_medium: "Interview medium is required" };
      }
    }
    setError(newError);
    setTimeout(() => {
      setError({});
    }, 5000);
    return validate;
  };


  const contextValue = { data, setData, error, setError, validateForm  }

  return (
    <CreateErrorContext.Provider value={contextValue}>
      {children}
    </CreateErrorContext.Provider>
  );
};

export const useErrorContext = () => {
  const context = useContext(CreateErrorContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormContext.Provider");
  }
  return context;
};
