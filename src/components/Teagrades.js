import React from "react";
import { Box, Typography } from "@mui/material";
import Long from "./longLeaf.png";
import Big from "./bigLeaf.png";
import Medium from "./mediumLeaf.png";
import Dust from "./dust.png";
import Ctc from "./ctcMix.png";

const Teagrades = () => {
  const styles = {
    mahasukh: {
      padding: "120px 0px 120px 7px",
      marginTop: "120px",
      backgroundColor: "#fffced",
    },
    mahateahead: {
      textAlign: "center",
      fontFamily: "Merriweather",
      fontWeight: "bold",
      lineHeight: "1.25",
      fontSize: "44px",
      color: "#182b3b",
    },
    teamain: {
      display: "flex",
      justifyContent: "space-between",
      margin: "107px 0px 0px 0px",
    },

    teacontent: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },

    text: {
      paddingTop: "24.7px",
      fontSize: "32px",
      color: "#232323",
      textAlign: "left",
      fontFamily: " Hind Vadodara",
      fontWeight: "bold",
      lineHeight: "1.41",
    },

    para: {
      fontSize: "20px",
      lineHeight: "30px",
      fontFamily:
        "-apple-system,BlinkMacSystemFont,Segoe UI Roboto Oxygen Ubuntu Cantarell Fira Sans  Droid Sans Helvetica Neue sans-serif",
    },
  };
  return (
    // main Box started//
    <Box sx={styles.mahasukh}>
      <Typography sx={styles.mahateahead}>Let's Dig Into Tea Grades</Typography>
      <Box sx={styles.teamain}>
        <Box sx={styles.teacontent}>
          <img src={Long} width={198.29} height={127.29} />
          <Box sx={styles.teahead}>
            <Typography sx={styles.text}>LONG LEAF</Typography>
          </Box>
          <Box sx={styles.teapara}>
            <Typography sx={styles.para}>
              Also known as English <br />
              tea and Orange Pekoe
              <br />
              tea, is full of aroma.
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.teacontent}>
          <img src={Big} width={194.09} height={127.29} />
          <Box sx={styles.teahead}>
            <Typography sx={styles.text}>BIG LEAF</Typography>
          </Box>
          <Box sx={styles.teapara}>
            <Typography sx={styles.para}>
              Also known as BOP, is <br />
              high in flavour and will <br />
              tickle your sweet tooth.
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.teacontent}>
          <img src={Medium} width={187.7} height={126.29} />
          <Box sx={styles.teahead}>
            <Typography sx={styles.text}>MEDIUM LEAF</Typography>
          </Box>
          <Box sx={styles.teapara}>
            <Typography sx={styles.para}>
              This tea is stronger <br />
              and smaller than the Big <br />
              leaf.
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.teacontent}>
          <img src={Dust} width={185.4} height={125.29} />
          <Box sx={styles.teahead}>
            <Typography sx={styles.text}>DUST</Typography>
          </Box>
          <Box sx={styles.teapara}>
            <Typography sx={styles.para}>
              Strongest and is <br />
              recommended for a <br />
              refreshing kick.
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.teacontent}>
          <img src={Ctc} width={198.29} height={127.29} />
          <Box sx={styles.teahead}>
            <Typography sx={styles.text}>CTC MIX</Typography>
          </Box>
          <Box sx={styles.teapara}>
            <Typography sx={styles.para}>
              Blend of all grades,
              <br />
              high flavour and strong <br />
              aroma.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Teagrades;
