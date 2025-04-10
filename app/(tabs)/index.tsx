// app/index.tsx

import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../styles/HomeScreen.styles';
// --- CHANGE THIS IMPORT ---
import { PostPreviewItem } from '../../components/PostPreviewItem'; // Import the PREVIEW component
// --- END CHANGE ---
import { Post, User } from '../../types';

const NYABYTE_LOGO_URL = 'https://cdn.nyabyte.dev/nyabyte.png';

const exampleUser: User = {
  id: 'user123',
  username: 'Wurdle',
  avatarUrl: 'https://cdn.nyabyte.dev/wurdleturtle.png',
};

const examplePost: Post = {
  id: 'post456',
  user: exampleUser,
  title: 'Example Post',
  data: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', // Keep full data here
  date: Date.now() - 1000 * 60 * 15,
  replies: ['reply1', 'reply2'],
  up: ['userA', 'userB', 'userC'],
  down: ['userD'],
  score: 2,
  tags: ['introduction', 'welcome', 'tech'],
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Image source={{ uri: NYABYTE_LOGO_URL }} style={styles.logo} />
          <PostPreviewItem post={examplePost} />
          <PostPreviewItem post={examplePost} />
          <PostPreviewItem post={examplePost} />
          <PostPreviewItem post={examplePost} />
          <PostPreviewItem post={examplePost} />
          <PostPreviewItem post={examplePost} />
          <PostPreviewItem post={examplePost} />
          <PostPreviewItem post={examplePost} />
          <PostPreviewItem post={examplePost} />
          <PostPreviewItem post={examplePost} />
          <PostPreviewItem post={examplePost} />
          <PostPreviewItem post={examplePost} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
