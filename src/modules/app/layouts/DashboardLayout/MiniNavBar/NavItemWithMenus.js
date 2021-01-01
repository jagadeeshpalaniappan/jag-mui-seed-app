import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NavItem from './NavItem';

const useStyles = makeStyles(theme => ({}));

export default function SimpleMenu({ menus, ignoreActive, ...rest }) {
  console.log('aa', menus);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <NavItem {...rest} onClick={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left'
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menus &&
          menus.map(menu => (
            <MenuItem
              activeClassName={ignoreActive ? '' : classes.active}
              classes={{ root: classes.button, label: classes.buttonLabel }}
              component={menu.href && RouterLink}
              to={menu.href}
            >
              {menu.title}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
}
