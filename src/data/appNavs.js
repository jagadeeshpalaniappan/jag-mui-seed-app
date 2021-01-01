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
  Grid as GridIcon,
  Activity as ActivityIcon,
  Image as ImageIcon
} from 'react-feather';

import UserAvatar from 'src/modules/app/layouts/DashboardLayout/MiniNavBar/UserAvatar';

export const user = {
  avatar: '/static/images/avatars/avatar.png',
  jobTitle: 'Fullstack Developer',
  name: 'Jagadeesh Palaniappan'
};

export const navMap = {
  '/app/dashboard': 'Dashboard',
  '/app/customers': 'Customers',
  '/app/products': 'Products',
  '/app/settings': 'Settings',
  '/app/account': 'Account'
};

export const items = [
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
    href: '/app/photos',
    icon: ImageIcon,
    title: 'Photos'
  },
  {
    href: '/app/analysis',
    icon: ActivityIcon,
    title: 'Analysis',
    badge: true
  }
];

export const bottomItems = [
  {
    // href: '/app/settings',
    menus: [
      { href: '/app/settings', title: 'Settings1' },
      { href: '/app/settings2', title: 'Settings2' }
    ],
    icon: SettingsIcon,
    title: 'Settings',
    badge: true
  },
  {
    icon: UserAvatar,
    menus: [
      { href: '/app/account', title: 'My Profile' },
      { href: '/app/preferences', title: 'My Preferences' },
      { href: '/app/settings', title: 'My Settings' },
      { href: '/app/logout', title: 'Logout' }
    ],
    title: 'User',
    hideTitle: true,
    badge: true
  }
];

export const moreItems = [
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
