// components/TabBarIcon.tsx

import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

interface TabBarIconProps
  extends IconProps<ComponentProps<typeof MaterialCommunityIcons>['name']> {}

export function TabBarIcon({ style, ...rest }: TabBarIconProps) {
  return <MaterialCommunityIcons size={26} style={style} {...rest} />;
}
