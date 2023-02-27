import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MedicationIcon from "@mui/icons-material/Medication";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';


const Cards = () => {
    const Cards = [
        {
          icon: <MedicationIcon />,
          title: "Qualified Doctors",
          disc: "Qualified doctors have completed medical education and training, hold a license to practice medicine, and are highly trained experts in diagnosing and treating medical conditions.",
        },
        {
          icon: <MedicalServicesIcon />,
          title: "Emergency Services",
          disc: "Emergency services provide urgent medical assistance in life-threatening situations, including ambulance transport, emergency department care, and trauma services. Quick response and treatment are essential for saving lives.",
        },
        {
          icon: <MedicalInformationIcon/>,
          title: "Transplant Services",
          disc: "Transplant services involve the surgical transfer of an organ or tissue from a donor to a recipient, often to treat life-threatening conditions. These services require specialized medical expertise and facilities.",
        },
        {
          icon: <AccessTimeIcon/> ,
          title: "24/7 Services",
          disc: "24/7 services are available round-the-clock, every day of the year, providing uninterrupted access to medical care and assistance. This includes emergency services, telemedicine, and other medical services.",
        },
      ];
    return (
      <Box sx={{display :"flex" ,
      justifyContent : "center" ,
      flexWrap : "wrap",
      textAlign : "center"}}>
        {Cards.map((card) => {
          return (
            <Box sx={{bgcolor : "darkblue", color : "white" , width :"300px" , height : "200px" , ml : "10px" , mb : "20px" , p : "10px"}} key={card.title}>
              <IconButton sx={{color : "white"}}>{card.icon}</IconButton>
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="p">{card.disc}</Typography>
            </Box>
          );
        })}
      </Box>
    );
}

export default Cards;
