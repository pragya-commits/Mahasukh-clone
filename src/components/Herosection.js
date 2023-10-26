import React from "react";
import { Box, Typography, Button } from "@mui/material";
import bgimage from "./bgimage.png";
const Herosection = () => {
  const styles = {
    headtext: {
      fontSize: "48px",
      lineHeight: "70px",
      color: "#182b3b",
      fontWeight: "bold",
    },
    headpara: {
      fontSize: "20px",
      lineHeight: "30px",
      textAlign: "left",
      fontWeight: "bold",
      color: "#182b3b",
      marginTop: "5%",
    },
    herobtn: {
      backgroundColor: "rgb(0, 51, 102)",
      paddingTop: "18px",
      paddingRight: "42px",
      paddingBottom: "18px",
      paddingLeft: "42px",
      bordertopleftRadius: "10px",
      bordertoprightRadius: "10px",
      borderbottomrightRadius: "10px",
      borderbottomleftRadius: "10px",
      textAlign: "left",
      fontFamily: "Open Sans",
      fontWeight: "600",
      lineHeight: "1.33",
      textTransform: "capitalize",
      color: "white",
      fontSize: "18px",
      marginTop: "10%",
    },
  };

  return (
    <Box sx={styles.mainhero}>
      <Box sx={styles.heroElement}>
        <img src={bgimage} height={1000} />
        <Box
          style={{
            position: "absolute",
            color: "black",
            top: "100%",
            right: "23%",
            transform: "translateX(-50%)",
          }}
        >
          <Typography sx={styles.headtext}>
            It's Not Just A Tea,
            <br />
            But A Refreshing Burst
          </Typography>
          <Typography sx={styles.headpara}>
            Every sip is infused with years of experience and consistent <br />
            quality leaving a long lasting taste of refreshing burst on your
            <br />
            palate
          </Typography>

          <Button sx={styles.herobtn}>Explore Our Tea</Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Herosection;
