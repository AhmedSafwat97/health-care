import { Box, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <Box sx={{ display: "flex", flexWrap : "wrap" ,justifyContent : "center" , bgcolor : "#242424", p : "20px"}}>
      <Box sx={{ width: "300px" , mr : "20px", mb : "20px" , ml : "20px", color : "white" }}>
        <Typography variant="h6">About Health Care</Typography>
        <Typography variant="p">
        Health care encompasses medical services for preventing, diagnosing, and treating illness, injury, and disease, promoting overall health.
        </Typography>
        <Typography variant="p">About Health Care</Typography>
      </Box>

      <Box sx={{ width: "300px" , mb : "20px" , ml : "20px" , color : "white" }}>
        <Typography variant="h6">Contact</Typography>
        <Box>
          <Typography variant="p">
            <LocationOnIcon /> No 42 louis st , unitedState{" "}
          </Typography>
        </Box>
        <Box>
          <Typography variant="p">
            <CallIcon /> +233 55567 67 / +233 45547 77
          </Typography>
        </Box>
        <Box>
          <Typography variant="p">
            <MailIcon /> info@healthcare.org
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "300px", mb : "20px" , ml : "20px" , color : "white" }}>
        <Typography variant="h6">Opening Hours</Typography>
        <Box>
          <Typography variant="p">Monday - Friday :7:30am - 22:00pm</Typography>
        </Box>
        <Box>
          <Typography variant="p">Saturday - Sunday :7:30am - 1:00pm</Typography>
        </Box>
        <Box>
          <Typography variant="p">Wednesday :24 hours Open</Typography>
        </Box>

        <Box>
          <Typography variant="p">Friday :24 hours Open</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
