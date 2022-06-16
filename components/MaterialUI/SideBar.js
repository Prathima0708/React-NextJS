import { Grid, Link, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    sidebarAboutBox: {
      padding: theme.spacing(2),
    },
    sidebarSection: {
      marginTop: theme.spacing(3),
    },
  }));
const SideBar = ({ archives, description, social, title }) => {
    const classes = useStyles();
  return (
    <Grid item xs={12} md={4}>
    <Paper elevation={0} className={classes.sidebarAboutBox}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </Paper>

    <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
      Archives
    </Typography>
    {archives.map((archive) => (
      <Link
        display="block"
        variant="body1"
        href={archive.url}
        key={archive.title}
      >
        {archive.title}
      </Link>
    ))}

    <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
      Social
    </Typography>
    {social.map((network) => (
      <Link display="block" variant="body1" href="#" key={network.name}>
        <Grid container direction="row" spacing={1} alignItems="center">
          <Grid item>
            <network.icon />
          </Grid>
          <Grid item>{network.name}</Grid>
        </Grid>
      </Link>
    ))}
  </Grid>
  )
}

export default SideBar