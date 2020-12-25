import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Toolbar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Menu as MenuIcon,
  MoreVert as MoreVertIcon,
  Settings as SettingsIcon
} from '@material-ui/icons';
import React, { useState } from 'react';
import TitleBreadcrumb from './TitleBreadcrumb';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    backgroundColor: 'inherit'
  },
  title: {
    flexGrow: 1
  }
}));

const AppToolbar = ({ toggleDrawer, pinSettingsMenu, toggleSettingsMenu }) => {
  const classes = useStyles();

  // dropDown:
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    // setAuth(event.target.checked);
  };
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" elevation={0} classes={{ root: classes.root }}>
        <Toolbar variant="dense">
          <Hidden smUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Box flexGrow={1}>
            <TitleBreadcrumb />
          </Box>

          <div>
            <IconButton
              onClick={toggleSettingsMenu}
              color={pinSettingsMenu ? 'primary' : 'inherit'}
            >
              <SettingsIcon />
            </IconButton>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Export Data</MenuItem>
              <MenuItem onClick={handleClose}>Save as New Template</MenuItem>
              <MenuItem onClick={handleClose}>Save Template</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppToolbar;
