import React from 'react';
import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/ProfileScreen.styles';

const NYABYTE_LOGO_URL = 'https://cdn.nyabyte.dev/nyabyte.png';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>My NyaByte Profile</Text>
        <View style={styles.logoContainer}>
          <Image source={{ uri: NYABYTE_LOGO_URL }} style={styles.logo} />
        </View>
        <View style={styles.separator} />
        <Text style={styles.body}>
          User settings and details will appear here soon!
        </Text>
      </View>
    </SafeAreaView>
  );
}
