// app/(tabs)/dms.tsx

import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../styles/DmsScreen.styles'; // Import styles (create next)
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For icon
import Colors from '../../constants/Colors';

export default function DmsScreen() {
  const themeColors = Colors.dark;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="message-text-outline" // Example icon
          size={64}
          color={themeColors.subtleText}
          style={styles.icon}
        />
        <Text style={styles.title}>Direct Messages</Text>
        <Text style={styles.body}>Your conversations will appear here.</Text>
      </View>
    </SafeAreaView>
  );
}
