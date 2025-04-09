import React, { useEffect } from 'react';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useFonts, Itim_400Regular } from '@expo-google-fonts/itim';
import * as SplashScreen from 'expo-splash-screen';

import Colors from '../constants/Colors';
import { TabBarIcon } from '../components/TabBarIcon';
import layoutStyles from '../styles/TabLayout.styles';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const themeColors = Colors.dark;
  const nyabyteColors = Colors.nyabyte;

  const [fontsLoaded, fontError] = useFonts({
    Itim_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const appFontFamily = 'Itim_400Regular';

  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: nyabyteColors.primary,
          tabBarInactiveTintColor: themeColors.tabIconDefault,
          headerShown: false,
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
        }}
      >
        <Tabs.Screen
          name="index"
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

        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? 'magnify' : 'magnify'}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
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
    </>
  );
}
