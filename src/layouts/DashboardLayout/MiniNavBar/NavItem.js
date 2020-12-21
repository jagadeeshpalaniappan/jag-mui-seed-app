import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  ListItem,
  makeStyles,
  Box,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    // color: theme.palette.text.secondary,
    color: 'inherit',
    fontWeight: 300,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%',
    borderRadius: 0,
    padding: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    opacity: 0.7,
    '&:hover': {
      background: theme.palette.primary.dark
    }
  },
  buttonLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {},
  title: {
    fontSize: '0.3rem',
    fontWeight: 300,
    marginTop: theme.spacing(0.5)
  },
  active: {
    borderLeft: '2px solid',
    backgroundColor: theme.palette.primary.dark,
    opacity: 1,
    '& $title': {
      // fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      // color: theme.palette.primary.main
    }
  }
}));

const NavItem = ({
  className,
  href,
  icon: Icon,
  title,
  ignoreActive,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      {...rest}
    >
      <Button
        exact
        disableRipple
        activeClassName={ignoreActive ? null : classes.active}
        classes={{ root: classes.button, label: classes.buttonLabel }}
        component={RouterLink}
        to={href}
      >
        {Icon && <Icon className={classes.icon} size="20" />}
        <Typography variant="caption" display="block" className={classes.title}>
          {title}
        </Typography>
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string
};

export default NavItem;
