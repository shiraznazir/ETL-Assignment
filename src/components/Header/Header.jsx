import React from "react";
import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
import style from "./HeaderStyle";
import NavItems from "./NavItems";
import clearIcon from "../../assets/SVG/clear-24px.svg";

const Header = () => {
  const data = ["Form Selection", "Set up", "Form Creation", "Review"];
  return (
    <Box>
      <AppBar sx={style.mainContainer}>
        <Toolbar>
          <Box sx={style.container}>
            <Box sx={style.navContainer}>
              {data?.map((item, index) => (
                <NavItems
                  key={index + 1}
                  title={item}
                  done={index === 0}
                  line={data.length - 1 !== index}
                />
              ))}
            </Box>
            <Box align="right" sx={style.clearBox}>
              <img src={clearIcon} alt="clear" />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
