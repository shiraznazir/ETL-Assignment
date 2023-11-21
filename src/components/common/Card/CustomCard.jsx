import { Box, Card, Typography } from "@mui/material";
import React from "react";
import style from "./CardStyle";

const CustomCard = ({ data, index, handleFormIndex, options }) => {
  const selected = options === index ? true : false;
  return (
    <Box sx={style.container} onClick={() => handleFormIndex(index)}>
      <Card
        variant="outlined"
        sx={{ ...style.card, borderColor: selected && "#1A8FE64D" }}
      >
        <Box
          sx={{
            ...style.box,
            background: selected ? "#1A8FE64D" : "var(--gray-15, #D8D8D8)",
          }}
        ></Box>
        <Box sx={style.textBox}>
          <Typography variant="p" className="heading">
            {data?.title}
          </Typography>
          <Typography variant="p" className="text">
            {data?.desc}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default CustomCard;
