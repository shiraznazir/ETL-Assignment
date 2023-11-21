import { createContext, useContext, useState } from "react";

const CreateFormContext = createContext();

export const FormContext = ({ children }) => {
  const [options, setOptions] = useState(0);
  return (
    <CreateFormContext.Provider value={[options, setOptions]}>
      {children}
    </CreateFormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(CreateFormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormContext.Provider");
  }
  return context;
};
