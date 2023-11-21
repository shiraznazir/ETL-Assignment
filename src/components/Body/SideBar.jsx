import { Box, Button, Drawer, Paper, Typography } from "@mui/material";
import React from "react";
import style from "./BodyStyle";
import CustomCard from "../common/Card/CustomCard";
import { useFormContext, useErrorContext } from "../../context";

const cardData = [
  {
    id: 1,
    title: "Details Collection",
    desc: `Collect information from Candidates on their education, work experience, contact no,etc`,
  },
  {
    id: 2,
    title: "Statement of Purpose",
    desc: `Start creating a new form with the wide options of fields available`,
  },
  {
    id: 3,
    title: "Interview Availability",
    desc: `Start creating a new form with the wide options of fields available`,
  },
];

const titleBoxData = {
  title: "New Form",
  desc: `Start creating a new form with the wide options of fields available`,
};

const SideBar = () => {
  const [options, setOptions] = useFormContext();
  const { validateForm } = useErrorContext();

  const handleFormIndex = (param) => {
    const validate = validateForm();
    if (param < options || validate) {
      setOptions(param);
    }
  };

  return (
    <Paper sx={style.drawer} elevation={3}>
      <Box sx={style.sideContainer}>
        <CustomCard
          data={titleBoxData}
          handleFormIndex={handleFormIndex}
          index={0}
          options={options}
        />
      </Box>
      <Box sx={style.textBox}>
        <Typography variant="p" className="text">
          Explore the following Templates:
        </Typography>
      </Box>
      <Box sx={style.cardBox}>
        {cardData?.map((item, index) => (
          <CustomCard
            key={item?.id}
            data={item}
            handleFormIndex={handleFormIndex}
            index={index + 1}
            options={options}
          />
        ))}
      </Box>
    </Paper>
  );
};

export default SideBar;
