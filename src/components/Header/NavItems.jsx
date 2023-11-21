import React from "react";
import style from "./HeaderStyle";
import grayCircle from "../../assets/SVG/circle-gray.svg";
import blueCircle from "../../assets/SVG/circle-blue.svg";
import doneIcon from "../../assets/SVG/done.svg";
import { Box, Divider, Typography } from "@mui/material";

const NavItems = ({ title, done, line }) => {
  return (
    <>
      <Box sx={style.navItem}>
        <Box
          sx={{
            ...style.grayBox,
            backgroundImage: `url(${grayCircle}) `,
          }}
        >
          {done && (
            <Box
              sx={{
                ...style.blueBox,
                backgroundImage: `url(${blueCircle}) `,
              }}
            >
              <img src={doneIcon} alt="done" />
            </Box>
          )}
        </Box>
        <Box sx={style.textBox}>
          <Typography variant="p" className="heading">
            {title}
          </Typography>
        </Box>
        {line && <Divider sx={style.lineBox} fullWidth />}
      </Box>
    </>
  );
};

export default NavItems;
