import React from 'react';
import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/HomeScreen.styles'; // Import the styles

// Define logo URL constant
const NYABYTE_LOGO_URL = 'https://cdn.nyabyte.dev/nyabyte.png';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={{ uri: NYABYTE_LOGO_URL }} style={styles.logo} />
        <View style={styles.separator} />
        <Text style={styles.body}>Welcome to MeowNet!</Text>
        <Text style={styles.body}>No posts yet... hang tight!</Text>
      </View>
    </SafeAreaView>
  );
}
