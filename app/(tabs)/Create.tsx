// app/(tabs)/create.tsx

import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../styles/CreatePostScreen.styles'; // Import styles (create next)
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For icon
import Colors from '../../constants/Colors';

export default function CreatePostScreen() {
  const themeColors = Colors.dark;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-box-outline" // Example icon
          size={64}
          color={themeColors.subtleText}
          style={styles.icon}
        />
        <Text style={styles.title}>Create Post</Text>
        <Text style={styles.body}>The post composition form will be here.</Text>
      </View>
    </SafeAreaView>
  );
}
