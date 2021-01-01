import React from 'react';
import { iconMap } from '../icons';

export default function AppIcon({ icon, ...rest }) {
  const Icon = iconMap[icon];
  console.log('AppIcon', { icon, Icon });
  //   return <div>{icon}</div>;

  return Icon && <Icon {...rest} />;
}
