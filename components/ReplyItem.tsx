// components/ReplyItem.tsx

import React from 'react';
// --- Import Image ---
import { View, Text, Image } from 'react-native';
// --- End Import ---
import { Reply } from '../types'; // Import the Reply type
import styles from '../styles/ReplyItem.styles'; // Import styles

// Simple date formatter (can be shared later)
const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })}`;
};

interface ReplyItemProps {
  reply: Reply;
}

export const ReplyItem: React.FC<ReplyItemProps> = ({ reply }) => {
  return (
    <View style={styles.container}>
      {/* Reply Header */}
      <View style={styles.header}>
        {/* --- Replace View with Image/Placeholder --- */}
        {reply.user.avatarUrl ? (
          // Display the Image if avatarUrl exists
          <Image source={{ uri: reply.user.avatarUrl }} style={styles.avatar} />
        ) : (
          // Display the placeholder View if no avatarUrl
          <View style={[styles.avatar, styles.avatarPlaceholder]} />
        )}
        {/* --- End Replace --- */}
        <View style={styles.userInfo}>
          <Text style={styles.username}>{reply.user.username}</Text>
          <Text style={styles.date}>{formatDate(reply.date)}</Text>
        </View>
      </View>

      {/* Reply Content */}
      <Text style={styles.content}>{reply.data}</Text>
    </View>
  );
};
