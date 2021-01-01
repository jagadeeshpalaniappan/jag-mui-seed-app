import {
  AlertCircle,
  BarChart,
  Lock,
  Settings,
  ShoppingBag,
  User,
  UserPlus,
  Users,
  MoreHorizontal,
  Grid,
  Activity,
  Image
} from 'react-feather';
import Logo from 'src/modules/app/components/Logo';

export const iconMap = {
  Logo,
  Dashboard: Grid,
  Customers: User,
  Products: ShoppingBag,
  Photos: Image,
  Analysis: Activity,
  Settings: Settings,
  Login: Lock,
  Register: UserPlus,
  Error: AlertCircle,
  Accounts: BarChart,
  More: MoreHorizontal
};
