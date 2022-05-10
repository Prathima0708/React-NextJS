import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';

import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});



export default function SimpleBottomNavigation() {
  const classes=useStyles()
  const [value, setValue] = React.useState(0);
 




  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation className={classes.root}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
      <BottomNavigationAction label="Trending" icon={<WhatshotIcon />}  style={{ color: "white" }} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon/>}  style={{ color: "white" }} />
        <BottomNavigationAction label="TV Series" icon={<TvIcon />}  style={{ color: "white" }} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />}  style={{ color: "white" }} />
      </BottomNavigation>
    </Box>
  );
}