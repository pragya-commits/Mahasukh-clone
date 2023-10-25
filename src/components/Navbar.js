import { Box, Typography } from "@mui/material";
import React from "react";
import mahasukh from "./mahasukh.png";

const Navbar = () => {
  const styles = {
    navBox: {
      display: "flex",
      justifyContent: "space-between",
    },
    navElement: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };

  return (
    <Box sx={styles.navBox}>
      <Box>
        <img src={mahasukh} width={223} height={98} />
      </Box>

      <Box sx={styles.navElement}>
        {/* (h1-h6,p,span)----> Typography */}
        <Typography sx={styles.navItem}> Why Us </Typography>
        <Typography sx={styles.navItem}> Our journey </Typography>
        <Typography sx={styles.navItem}> Our Products </Typography>
        <Typography sx={styles.navItem}> Distributor/Franchise </Typography>
        <Typography sx={styles.navItem}> Contact Us</Typography>
      </Box>
    </Box>
  );
};
export default Navbar;
