import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./Home.css";
const HomeBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#EEE",
        height : { md : "90vh"}
      }}
    >
      <Box sx={{ height: "fit-content" , mt : {xs : "40px" , md : "0"} ,textAlign : {xs : "center" ,md: "start"} }}>
        <Typography variant="h6">
          We Provide All Health Care Solution
        </Typography>
        <Typography variant="h3">Protect And Take Care Of </Typography>
        <Typography sx={{ mb: "20px" }} variant="h3">
          Your Health{" "}
        </Typography>
        <Button variant="contained" sx={{ bgcolor: "red" }}>
          Read More
        </Button>
      </Box>

      <Box>
        <Box
          className="photo"
          sx={{
            bgcolor: "blue",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            ml: {md : "50px"},
            mb : {xs : "30px"} ,
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            style={{
              width: "450px",
            }}
            src="../../img/doc.png"
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeBanner;
