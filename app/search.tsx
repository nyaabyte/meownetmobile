import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/SearchScreen.styles';
import Colors from '../constants/Colors';

export default function SearchScreen() {
  const themeColors = Colors.dark;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Search MeowNet</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for posts or users..."
          placeholderTextColor={themeColors.subtleText}
        />
        <View style={styles.separator} />
        <Text style={styles.body}>Search results will appear here.</Text>
      </View>
    </SafeAreaView>
  );
}
