import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';

import NavItem from './NavItem';
import MoreNavItem from './MoreNavItem';
import Logo from 'src/components/Logo';
import * as appNavs from 'src/data/appNavs';

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 104,
    top: 0,
    height: '100%'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ bgcolor, color }) => {
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      bgcolor={bgcolor}
      color={color}
    >
      <NavItem
        href="/"
        key="my-app"
        title="My App"
        icon={Logo}
        ignoreActive
        hideTitle
      />

      <List>
        {appNavs.items.map(item => (
          <NavItem
            href={item.href}
            key={item.title}
            title={item.title}
            icon={item.icon}
            hideTitle={item.hideTitle}
            badge={item.badge}
          />
        ))}
        <MoreNavItem items={appNavs.moreItems} />
      </List>

      <Box flexGrow={1} />

      <List>
        {appNavs.bottomItems.map(item => (
          <NavItem
            href={item.href}
            key={item.title}
            title={item.title}
            icon={item.icon}
            hideTitle={item.hideTitle}
            badge={item.badge}
          />
        ))}
      </List>
    </Box>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
