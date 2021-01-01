import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles(theme => ({
  button: {
    textTransform: 'none'
  }
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Button
        color="inherit"
        className={classes.button}
        startIcon={<WhatshotIcon />}
        onClick={handleClick}
      >
        <Typography variant="h6" noWrap classes={{ root: classes.title }}>
          Group1
        </Typography>
      </Button>
      <Button
        color="inherit"
        className={classes.button}
        startIcon={<WhatshotIcon />}
        onClick={handleClick}
      >
        <Typography variant="h6" noWrap classes={{ root: classes.title }}>
          Temp1
        </Typography>
      </Button>
    </Breadcrumbs>
  );
}

export default IconBreadcrumbs;
