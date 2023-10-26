import React from "react";
import { Box, Typography } from "@mui/material";
import exper from "./exper.png";
import exper1 from "./expertise.png";
import exper2 from "./reasonable.png";
import exper3 from "./consistent.png";

const Qualities = () => {
  const styles = {
    quality: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      marginRight: "40px",
      marginLeft: "40px",
      marginTop: "150px",
      marginBottom: "150px",
    },
    text: {
      fontSize: "24px",
      fontWeight: "550",
      fontFamily: "Merriweather",
    },
    para: {
      fontSize: "18px",
      paddingTop: "8px",
      lineHeight: "1.63",
      fontFamily: "open-sans",
      fontWeight: "400",
    },
  };
  return (
    <Box sx={styles.quality}>
      <Box>
        <img src={exper} width={75.9} height={120} />
        <Box>
          <Typography sx={styles.text}>
            48 Years of <br /> Experience
          </Typography>
        </Box>
        <Box>
          <Typography sx={styles.para}>
            Our expertise lies in our <br />
            experience for being a part of the <br />
            tea industry since 1972.
          </Typography>
        </Box>
      </Box>

      <Box>
        <img src={exper1} width={114.9} height={120} />
        <Box>
          <Typography sx={styles.text}>Expertise In Industry</Typography>
        </Box>
        <Box>
          <Typography sx={styles.para}>
            The top management are <br />
            professional tea tasters <br />
            recognized by Governments Tea <br />
            board of India.
          </Typography>
        </Box>
      </Box>

      <Box>
        <img src={exper2} width={86.29} height={120} />
        <Box>
          <Typography sx={styles.text}>Reasonable Price</Typography>
        </Box>
        <Box>
          <Typography sx={styles.para}>
            With our experience and expertise <br />
            we taste and handpick the best <br />
            quality tea at reasonable prices.
          </Typography>
        </Box>
      </Box>

      <Box>
        <img src={exper3} width={90.7} height={119.79} />
        <Box>
          <Typography sx={styles.text}>Consistent Quality</Typography>
        </Box>
        <Box>
          <Typography sx={styles.para}>
            Our passion for tea motivates us <br />
            to give you the best taste and <br />
            consistent quality throughout the
            <br />
            year.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Qualities;
