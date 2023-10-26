import React from "react";
import { Box, Button, Typography } from "@mui/material";
import cup from "./teaCup.png";
const Ourjourney = () => {
  const styles = {
    contentBox: {
      display: "flex",
      justifyContent: "space-between",
      padding: "90px 72px 0px 72px",
    },
    journeyhead: {
      textAlign: "center",
      fontFamily: "Merriweather",
      fontWeight: "bold",
      lineHeight: "1.25",
      fontSize: "44px",
      color: "#182b3b",
    },
    contentpara: {
      textAlign: "left",
      fontFamily: "Hind Vadodara",
      fontWeight: "500",
      fontSize: "22px",
      lineHeight: "38px",
    },
    contentbtn: {
      backgroundColor: "rgb(0, 51, 102)",
      paddingTop: "18px",
      paddingRight: "42px",
      paddingBottom: "18px",
      paddingLeft: "42px",
      fontSize: "18px",
      bordertopleftRadius: "10px",
      bordertoprightRadius: "10px",
      borderbottomrightRadius: "10px",
      borderbottomleftRadius: "10px",
      textAlign: "left",
      fontFamily: "Open Sans",
      fontWeight: "600",
      lineHeight: "1.33",
      textTransform: "capitalize",
      color: "#fff",
      marginTop: "60px",
    },
  };

  return (
    // MAIN OUR JOURNEY DIV STARTED//
    <Box sx={styles.mainBox}>
      <Typography sx={styles.journeyhead}>Our Journey</Typography>
      {/* content started from here */}
      <Box sx={styles.contentBox}>
        <Box sx={styles.content}>
          <Typography sx={styles.contentpara}>
            Mahasukh Tea, from the house of Sha <br />
            Mahasukhlal Thakersi , began its journey from <br />
            1972 with the goal to bring garden fresh tea into <br />
            every household. And the creator of this brand is <br />
            none other than Mahasukhlal Shah, also known <br />
            as Mahasukh bhai. Born in Gujarat,
            <br />
            Mahasukhbhai started his career selling tea on <br />
            bicycles. He has laid the foundation of <br />
            “Mahasukh Tea” and since then we have worked <br />
            hard to deliver a consistent taste of our tea <br />
            which is rich in flavor with a long lasting taste <br />
            on your palate.
          </Typography>
          <Button sx={styles.contentbtn}>Contact Now For Your Tea Bag</Button>
        </Box>
        <Box sx={styles.contentimg}>
          <img src={cup} width={559.67} height={436} />
        </Box>
      </Box>
    </Box>
  );
};
export default Ourjourney;
