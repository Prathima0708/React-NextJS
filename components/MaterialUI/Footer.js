import { Container, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'



const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(4),
      padding: theme.spacing(6, 0),
    },
  }));
const Footer = ({title,description}) => {
    const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright &copy;{" "}
          <Link color="inherit" href="https://material-ui.com/">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer