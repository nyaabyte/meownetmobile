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
        headerShown: false,
      }}
    >
      {/* Feed Tab */}
      <Tabs.Screen
        name="index" // app/(tabs)/index.tsx
        options={{
          title: 'Feed',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home-variant' : 'home-variant-outline'}
              color={color}
            />
          ),
        }}
      />

      {/* Search Tab */}
      <Tabs.Screen
        name="search" // app/(tabs)/search.tsx
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'magnify'} color={color} />
          ),
        }}
      />

      {/* --- ADD CREATE POST TAB --- */}
      <Tabs.Screen
        name="Create" // app/(tabs)/create.tsx
        options={{
          title: 'Create',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'plus-circle' : 'plus-circle-outline'}
              color={color}
              size={28} // Slightly larger icon for center?
            />
          ),
          // Optional: Style the middle button differently if desired
          // tabBarItemStyle: { ... }
        }}
      />
      {/* --- END CREATE POST TAB --- */}

      {/* --- ADD DMS TAB --- */}
      <Tabs.Screen
        name="dms" // app/(tabs)/dms.tsx
        options={{
          title: 'DMs',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'message-text' : 'message-text-outline'}
              color={color}
            />
          ),
        }}
      />
      {/* --- END DMS TAB --- */}

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile" // app/(tabs)/profile.tsx
        options={{
          title: 'Profile',
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
