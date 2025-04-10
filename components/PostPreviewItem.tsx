// components/PostPreviewItem.tsx

import React from 'react';
import { View, Text, Pressable, Image } from 'react-native'; // Import Image
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import { Post } from '../types'; // Import the Post type
import styles from '../styles/PostPreviewItem.styles'; // Import styles
import Colors from '../constants/Colors'; // For theme colors

// Simple date formatter (consider sharing or using a library later)
const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  return date.toLocaleDateString(); // Simple date format for preview
};

// Function to truncate text
const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength).trim() + '...';
};

interface PostPreviewItemProps {
  post: Post;
}

export const PostPreviewItem: React.FC<PostPreviewItemProps> = ({ post }) => {
  const router = useRouter(); // Get the router instance
  const themeColors = Colors.dark;

  // Function to handle navigation when the preview is pressed
  const handlePress = () => {
    // Navigate to the dynamic post screen, passing the post ID
    router.push(`/post/${post.id}`);
  };

  return (
    // Use Pressable to make the whole item tappable
    <Pressable onPress={handlePress} style={styles.pressableContainer}>
      {/* Main container for the preview content */}
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          {/* Display Avatar Image or Placeholder */}
          {post.user.avatarUrl ? (
            <Image
              source={{ uri: post.user.avatarUrl }}
              style={styles.avatar}
            />
          ) : (
            // Fallback placeholder if no avatar URL is provided
            <View style={[styles.avatar, styles.avatarPlaceholder]} />
          )}
          {/* User Info */}
          <View style={styles.userInfo}>
            <Text style={styles.username}>{post.user.username}</Text>
            <Text style={styles.date}>{formatDate(post.date)}</Text>
          </View>
        </View>

        {/* Post Title (Optional) */}
        {post.title && <Text style={styles.title}>{post.title}</Text>}

        {/* Post Content Preview (Truncated) */}
        <Text style={styles.contentPreview}>
          {truncateText(post.data, 50)} {/* Show first 100 characters */}
        </Text>

        {/* Footer Section (Simplified) */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Score: {post.score}</Text>
          <Text style={styles.footerText}>{post.replies.length} Replies</Text>
        </View>
      </View>
    </Pressable>
  );
};
