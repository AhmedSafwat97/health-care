import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box>
      <Typography sx={{ m: "30px" }} variant="h4">
        About
      </Typography>

      <Box sx={{ display: "flex", alignItems:"center" ,justifyContent: "center" , flexWrap : "wrap" }}>
        <Box sx={{ }}>
          <img style={{width : "400px"}} src="../../img/22 (1).png" alt="" />
        </Box>

        <Box sx={{width : {xs : "300px" , md : "400px"} , p : "10px 20px"}}>
          <Typography variant="h4" >Enhancing Health Excelling in Care.</Typography>
          <Typography variant="p" >
          Enhancing health and excelling in care are essential components of a high-quality healthcare system. To achieve this, healthcare providers must prioritize patient-centered care that focuses on meeting the unique needs and preferences of each patient. This can be accomplished through ongoing training and education for healthcare professionals, as well as the implementation of evidence-based practices and advanced technologies. Additionally, healthcare organizations must prioritize patient safety and implement strategies to prevent medical errors and adverse events. By prioritizing patient-centered care and investing in the continuous improvement of healthcare practices, providers can enhance the overall health of their patients and excel in delivering high-quality care.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
