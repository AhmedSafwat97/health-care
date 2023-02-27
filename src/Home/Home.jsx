import { Box } from "@mui/system";
import React from "react";
import Cards from "./Cards";
import HomeBanner from "./Home-banner";
import Solutions from "./Solutions";
import Whatwedo from "./Whatwedo";

const Home = () => {
  return (
    <Box>
      <HomeBanner />
      <Cards />
      <Box sx={{ m: "40px 0" }}>
        <Whatwedo />
      </Box>
      <Solutions />
    </Box>
  );
};

export default Home;
