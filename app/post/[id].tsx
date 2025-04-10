import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, Stack } from 'expo-router';
import { PostItem } from '../../components/PostItem';
import { ReplyItem } from '../../components/ReplyItem';
import { Post, User, Reply } from '../../types';
import styles from '../../styles/FullPostScreen.styles';
import Colors from '../../constants/Colors';
const exampleUser: User = {
  id: 'user123',
  username: 'Wurdle',
  avatarUrl: 'https://cdn.nyabyte.dev/wurdleturtle.png',
};
const anotherUser: User = {
  id: 'user456',
  username: 'Lycanea',
  avatarUrl: 'https://lycanea.dev/avatar.png',
};
const exampleReply1: Reply = {
  id: 'reply1',
  user: anotherUser,
  data: 'An Example Response',
  date: Date.now() - 1000 * 60 * 10,
  postId: 'post456',
};

const exampleReply2: Reply = {
  id: 'reply2',
  user: exampleUser,
  data: 'Another Example Response',
  date: Date.now() - 1000 * 60 * 5,
  postId: 'post456',
};

const allReplies = [exampleReply1, exampleReply2];

const examplePost: Post = {
  id: 'post456',
  user: exampleUser,
  title: 'Example Post',
  data: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  date: Date.now() - 1000 * 60 * 15,
  replies: [exampleReply1.id, exampleReply2.id],
  up: ['userA', 'userB', 'userC'],
  down: ['userD'],
  score: 2,
  tags: ['example', 'test', 'something'],
};

const findPostById = (id: string): Post | null => {
  if (id === examplePost.id) return examplePost;
  return null;
};
const findRepliesByPostId = (postId: string): Reply[] => {
  return allReplies.filter((reply) => reply.postId === postId);
};

export default function FullPostScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const post = id ? findPostById(id) : null;

  const replies = post ? findRepliesByPostId(post.id) : [];

  const themeColors = Colors.dark;

  if (!post) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Stack.Screen
          options={{ title: 'Post Not Found', headerBackTitle: 'Back' }}
        />
        <View style={styles.container}>
          <Text style={styles.errorText}>Post not found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen
        options={{
          title: post.title || 'Post',
          headerStyle: { backgroundColor: themeColors.tabBarBackground },
          headerTintColor: themeColors.text,
          headerTitleStyle: { fontFamily: 'Itim_400Regular' },
          headerBackTitle: 'Back',
        }}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <PostItem post={post} />

          <View style={styles.repliesContainer}>
            <Text style={styles.repliesHeader}>Replies ({replies.length})</Text>
            {replies.length > 0 ? (
              replies.map((reply) => <ReplyItem key={reply.id} reply={reply} />)
            ) : (
              <Text style={styles.noRepliesText}>No replies yet.</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
