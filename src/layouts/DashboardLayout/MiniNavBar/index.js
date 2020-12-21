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
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
  MoreHorizontal as MoreHorizIcon,
  Grid as GridIcon
} from 'react-feather';
import NavItem from './NavItem';
import MoreNavItem from './MoreNavItem';
import Logo from 'src/components/Logo';

const user = {
  avatar: '/static/images/avatars/avatar.png',
  jobTitle: 'Fullstack Developer',
  name: 'Jagadeesh Palaniappan'
};

const items = [
  {
    href: '/app/dashboard',
    icon: GridIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/customers',
    icon: UsersIcon,
    title: 'Customers'
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Products'
  },
  {
    href: '/app/accounts',
    icon: BarChartIcon,
    title: 'Accounts'
  }
];

const bottomItems = [
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'User'
  }
];

const moreItems = [
  {
    href: '/login',
    icon: LockIcon,
    title: 'Login'
  },
  {
    href: '/register',
    icon: UserPlusIcon,
    title: 'Register'
  },
  {
    href: '/404',
    icon: AlertCircleIcon,
    title: 'Error'
  },
  {
    href: '/app/dashboard',
    icon: GridIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/customers',
    icon: UsersIcon,
    title: 'Customers'
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Products'
  },
  {
    href: '/app/accounts',
    icon: BarChartIcon,
    title: 'Accounts'
  }
];

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
        {items.map(item => (
          <NavItem
            href={item.href}
            key={item.title}
            title={item.title}
            icon={item.icon}
          />
        ))}
        <MoreNavItem items={moreItems} />
      </List>

      <Box flexGrow={1} />

      <List>
        {bottomItems.map(item => (
          <NavItem
            href={item.href}
            key={item.title}
            title={item.title}
            icon={item.icon}
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
