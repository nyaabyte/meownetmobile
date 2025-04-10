// components/PostItem.tsx

import React from 'react';
import { View, Text, Image } from 'react-native';
import { Post } from '../types'; // Import the Post type
import styles from '../styles/PostItem.styles'; // Import styles (we'll create this next)
import Colors from '../constants/Colors'; // For tag colors etc.

// Helper function to format the date (simple version)
const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  // Very basic formatting, consider a library like date-fns for "X minutes ago" later
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })}`;
};

interface PostItemProps {
  post: Post;
}
export const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const themeColors = Colors.dark;
  const accentColor = Colors.nyabyte.primary;

  return (
    <View style={styles.container}>
      {/* Post Header */}
      <View style={styles.header}>
        {/* --- Replace View with Image --- */}
        {post.user.avatarUrl ? (
          <Image source={{ uri: post.user.avatarUrl }} style={styles.avatar} />
        ) : (
          // Fallback placeholder if no avatar URL
          <View style={[styles.avatar, styles.avatarPlaceholder]} />
        )}
        {/* --- End Replace --- */}
        <View style={styles.userInfo}>
          <Text style={styles.username}>{post.user.username}</Text>
          <Text style={styles.date}>{formatDate(post.date)}</Text>
        </View>
      </View>

      {/* ... (rest of the component: title, content, tags, footer) ... */}
      {post.title && <Text style={styles.title}>{post.title}</Text>}
      <Text style={styles.content}>{post.data}</Text>
      {post.tags && post.tags.length > 0 && (
        <View style={styles.tagsContainer}>
          {post.tags.map((tag) => (
            <View
              key={tag}
              style={[styles.tag, { backgroundColor: accentColor }]}
            >
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      )}
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Text style={styles.score}>Score: {post.score}</Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={styles.replyCount}>{post.replies.length} Replies</Text>
        </View>
      </View>
    </View>
  );
};
