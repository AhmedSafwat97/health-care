import { Box, Typography } from "@mui/material";
import React from "react";
import "./Home.css"

const Solutions = () => {
  return (
    <Box sx={{bgcolor:"lightblue" , p : "10px" ,m : "30px 0" , display: "flex", alignItems : "center" ,justifyContent: "center" , flexWrap :" wrap"}}>
      <Box sx={{ width: {xs : "250px" , md : "400px"} }}>
        <img style={{ width: "100%" }} src="../../img/medical.jpg" alt="" />
      </Box>

      <Box sx={{ width: "300px" , m : "20px 0" , ml : {xs : "0px" , md : "40px"} }}>
        <Typography variant="h5">Medical & HealthCare Solutions</Typography>
        <Box>
          <Typography variant="p">
            Medical and healthcare solutions refer to the technologies,
            practices, and systems that improve health outcomes for individuals
            and communities. They include pharmaceuticals, medical devices,
            healthcare software, telemedicine, and AI/ML technologies. These
            solutions are constantly evolving to provide more effective,
            efficient, and accessible care to patients.
          </Typography>
        </Box>{" "}
      </Box>
    </Box>
  );
};

export default Solutions;
