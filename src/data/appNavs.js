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
    icon: 'Dashboard',
    title: 'Dashboard'
  },
  {
    href: '/app/customers',
    icon: 'Customers',
    title: 'Customers'
  },
  {
    href: '/app/products',
    icon: 'Products',
    title: 'Products'
  },
  {
    href: '/app/photos',
    icon: 'Photos',
    title: 'Photos'
  },
  {
    href: '/app/analysis',
    icon: 'Analysis',
    title: 'Analysis',
    badge: true
  }
];

export const moreItems = [
  {
    href: '/login',
    icon: 'Login',
    title: 'Login'
  },
  {
    href: '/register',
    icon: 'Register',
    title: 'Register'
  },
  {
    href: '/404',
    icon: 'Error',
    title: 'Error'
  },
  {
    href: '/app/dashboard',
    icon: 'Dashboard',
    title: 'Dashboard'
  },
  {
    href: '/app/customers',
    icon: 'Customers',
    title: 'Customers'
  },
  {
    href: '/app/products',
    icon: 'Products',
    title: 'Products'
  },
  {
    href: '/app/accounts',
    icon: 'Accounts',
    title: 'Accounts'
  }
];

export const bottomItems = [
  {
    href: '/app/settings',
    menus: [
      { href: '/app/settings', title: 'Settings1' },
      { href: '/app/settings2', title: 'Settings2' }
    ],
    icon: 'Settings',
    title: 'Settings',
    badge: true
  },
  {
    href: '/app/my',
    img: 'http://jagadeeshpalaniappan.github.io/assets/img/jag/hero1.jpg',
    menus: [
      { href: '/app/my/profile', title: 'My Profile' },
      { href: '/app/my/preferences', title: 'My Preferences' },
      { href: '/app/my/logout', title: 'Logout' }
    ],
    title: 'Jagadeesh Palaniappan',
    hideTitle: true,
    badge: true
  }
];
