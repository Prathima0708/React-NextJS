import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import { green, purple, red } from "@mui/material/colors";
import styledEngine from "@mui/styled-engine";
import { theme } from "./theme";

// const value = window.innerWidth;

const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    color: green[500],
  },
  [theme.breakpoints.up("md")]: {
    color: purple[500],
  },
  [theme.breakpoints.up("lg")]: {
    color: red[500],
  },
}));

const MUI = () => {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));
  // const [w, setW] = useState(value);
  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Responsive>
        <Typography variant="h4">Advanced Material UI</Typography>
        {/* <Typography>{w} px</Typography> */}
        <Button color="secondary">Secondary button</Button>
        <BlueButton>My Button</BlueButton>
        <BlueButton>My Another Button</BlueButton>
      </Responsive>
    </ThemeProvider>
  );
};

export default MUI;
