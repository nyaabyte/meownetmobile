// app/_layout.tsx

import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Itim_400Regular } from '@expo-google-fonts/itim';
import * as SplashScreen from 'expo-splash-screen';

import Colors from '../constants/Colors';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const themeColors = Colors.dark;
  const appFontFamily = 'Itim_400Regular';

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

  return (
    <>
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: themeColors.tabBarBackground },
          headerTintColor: themeColors.text,
          headerTitleStyle: { fontFamily: appFontFamily },
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="post/[id]"
          options={{
            headerShown: true,
            headerBackTitle: 'Back',
          }}
        />
      </Stack>
    </>
  );
}
