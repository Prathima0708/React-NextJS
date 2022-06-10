import { Container, Grid } from '@mui/material'
import React from 'react'
import Header from './Header'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FeaturedPost from './FeaturedPost';
import { featuredPosts, sidebar } from './Data/Data';
import PostCard from './PostCard';
import { ClassNames } from '@emotion/react';
import Main from './Main';
import SideBar from './SideBar';
import { makeStyles } from '@mui/styles';
import Footer from './Footer';

const useStyles = makeStyles( ({
  mainGrid: {
    marginTop: '33px',
  },
}));

const MaterialUI = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

 
  const classes=useStyles()
  return (
    
    <>
  
    <ThemeProvider theme={darkTheme}>
    <Container >
       <Header />
       <FeaturedPost />
       <br />
       <Grid container spacing={4}>
         {featuredPosts.map((post)=>(
           <PostCard post={post} key={post.title}/>
         ))}
       </Grid>
       <Grid container spacing={5} className={classes.mainGrid}>
          <Main title='From the Firehose' />
          <SideBar title={sidebar.title} description={sidebar.description} archives={sidebar.archives} social={sidebar.social}/>
       </Grid>
    </Container>
    <Footer title='Footer' description='Something here to give the footer a purpose!' />
    </ThemeProvider>
    </>
  )
}

export default MaterialUI