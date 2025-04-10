// app/(tabs)/_layout.tsx

import React from 'react';
import { Tabs } from 'expo-router';

import Colors from '../../constants/Colors';
import { TabBarIcon } from '../../components/TabBarIcon';
import layoutStyles from '../../styles/TabLayout.styles';

export default function TabLayout() {
  const themeColors = Colors.dark;
  const nyabyteColors = Colors.nyabyte;
  const appFontFamily = 'Itim_400Regular';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: nyabyteColors.primary,
        tabBarInactiveTintColor: themeColors.tabIconDefault,
        tabBarStyle: layoutStyles.tabBar,
        tabBarLabelStyle: [
          layoutStyles.tabBarLabel,
          { fontFamily: appFontFamily },
        ],
        tabBarItemStyle: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        },

        headerShown: true,
        headerStyle: {
          backgroundColor: themeColors.background,

          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: themeColors.text,
        headerTitleStyle: { fontFamily: appFontFamily },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home-variant' : 'home-variant-outline'}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'magnify'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Create"
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'plus-circle' : 'plus-circle-outline'}
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="dms"
        options={{
          title: 'Direct Messages',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'message-text' : 'message-text-outline'}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'account-heart' : 'account-heart-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
