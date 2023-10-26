import { Box, Typography } from "@mui/material";
import React from "react";
import distributor from "./distributor.png";

const Distributor = () => {
  const styles = {
    form: {
      flexGrow: "0",
      maxWidth: "41.666667%",
      flexBasis: "41.666667%",
      margin: "0",
      boxSizing: "border-box",
      display: "flex",
      flexWrap: "wrap",
    },
  };
  return (
    <Box>
      <Typography>Become Distributor And Grow With Us</Typography>
      <Box>
        <Box>
          <Typography>
            High Profit Margin with <br />
            diversified product <br />
            portfolio
          </Typography>
          <Typography>
            Tea being the most consumed drink in India,
            <br /> presents a huge opportunity to become our <br /> distributor
            or to add Mahasukh tea in your <br /> already existing distribution
            business. We <br /> have a competitive edge with attractive <br />{" "}
            margin and a diversified product portfolio to <br /> cater the
            household, commercial and <br /> wholesale use of tea with best
            quality at <br /> reasonable prices.
          </Typography>
        </Box>
        <Box>
          <img src={distributor} width={559.67} height={440.5} />
        </Box>
        <Box sx={styles.form}>
          <form>
            <label for="fname"></label>
            <input
              type="text"
              placeholder="Enter Name"
              name=" "
              id="fname"
            ></input>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
export default Distributor;
