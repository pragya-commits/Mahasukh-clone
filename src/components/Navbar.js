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
      marginLeft: "70px",
      marginRight: "100px",
      marginTop: "15px",
      marginBottom: "15px",
    },
    navItem: {
      marginRight: "10px",
      fontSize: "1.3177159590043923vw",
      fontWeight: "530",
      lineHeight: "1.33",
      paddingRight: "50px",
      textAlign: "left",
    },
    imgchai: {
      padding: "7px, 0px, 10px, 70px",
      marginLeft: "60px",
      fontFamily: "open sans",
    },
  };

  return (
    <Box sx={styles.navBox}>
      <Box sx={styles.imgchai}>
        <img src={mahasukh} width={151} height={81} />
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
