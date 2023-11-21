import React, { useEffect, useState } from "react";
import style from "./BodyStyle";
import { Box, Grid } from "@mui/material";
import SideBar from "./SideBar";
import PreviewSection from "../common/PreviewSection/PreviewSection";
import Form1 from "../Form/Form1";
import Form2 from "../Form/Form2";
import Form3 from "../Form/Form3";
import Form4 from "../Form/Form4";
import Final from "../Form/Final";
import { useFormContext } from "../../context";

const Body = () => {
  const [options] = useFormContext();

  return (
    <>
      <Box sx={style.bodyContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <SideBar />
          </Grid>
          <Grid item xs={12} md={8}>
            <PreviewSection>
              {options === 0 && <Form1 />}
              {options === 1 && <Form2 />}
              {options === 2 && <Form3 />}
              {options === 3 && <Form4 />}
              {options === 4 && <Final />}
            </PreviewSection>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Body;
