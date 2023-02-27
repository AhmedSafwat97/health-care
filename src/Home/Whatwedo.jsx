import { Box, Typography } from "@mui/material";
import React from "react";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';




const Whatwedo = () => {
  return (
    <Box sx={{ textAlign: "center" , display : "flex" ,flexDirection : 'column' , alignItems : "center" }}>
      <Typography variant="h4">What We do ?</Typography>
      <Box sx={{width : {xs : "250px" , md : "400px"} , p : "10px"}}>
        <Typography variant="p">
          We provide patient-centered medical services using evidence-based
          practices and advanced technologies to diagnose, treat and prevent
          illnesses and injuries while prioritizing patient safety and
          well-being.
        </Typography>
      </Box>
      <Box sx={{ display : "flex" , flexWrap : "wrap" , alignItems : "center" , justifyContent : "center"}}>
        <Box>
            <Box sx={{ml : "30px" , mb : "30px" , width : "300px" , borderBottom : "2px solid Blue" , pb : "30px"}}>
                <Typography variant="h5"><MonitorHeartIcon/> CARDIAC CLINIC</Typography>
                <Typography variant="p">The Cardiac Clinic is a medical facility that specializes in the diagnosis, treatment, and prevention of heart-related conditions, including heart disease, hypertension, and arrhythmia.</Typography>
            </Box>
            <Box sx={{ml : "30px" , width : "300px" }}>
            <Typography variant="h5"><VisibilityIcon/> EYE CARE & SURGERY</Typography>
            <Typography variant="p">Eye Care & Surgery is a medical service that focuses on the diagnosis, treatment, and surgical management of eye-related conditions such as cataracts, glaucoma, and refractive errors.</Typography>
            </Box>
        </Box>
        <Box>
            <img src="../../img/doc2.png" alt=""/>
        </Box>

        <Box>
            <Box sx={{mr : {xs : "0" , md : "30px"}  , mb : "30px", mt : {xs : "20px" , md : "0"} ,width : "300px" , borderBottom : "2px solid Blue" , pb : "20px" }} >
                <Typography variant="h5"><MedicalServicesIcon/> DIABETES TREATMENT</Typography>
                <Typography variant="p"> Diabetes Treatment is a medical service that involves the diagnosis, management, and prevention of diabetes, a chronic condition characterized by high blood sugar levels that can lead to serious health complications.</Typography>
            </Box>
            <Box sx={{mr : {xs : "0" , md : "30px"}  , width : "300px" }}>
            <Typography variant="h5"><LocalHospitalIcon/> EMERGENCY SERVICES</Typography>
            <Typography variant="p">Emergency Services refer to medical care provided in response to urgent situations such as severe injuries, acute illnesses, and life-threatening conditions that require immediate attention and intervention.</Typography>
            </Box>
        </Box>



      </Box>
    </Box>
  );
};

export default Whatwedo;
