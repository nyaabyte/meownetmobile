import React from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  SafeAreaView,
} from 'react-native';
import { Link, Stack } from 'expo-router';
import {
  DMS_CONVERSATIONS,
  Conversation,
} from '../../constants/PlaceholderDMs';
import styles from '../../styles/DMsScreen.styles';
import Colors from '../../constants/Colors';

export default function DMsScreen() {
  const themeColors = Colors.dark;

  const renderItem = ({ item }: { item: Conversation }) => (
    <Link href={`/chat/${item.id}`} asChild>
      <Pressable style={styles.itemContainer}>
        <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.userName}>{item.otherUserName}</Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.lastMessage}
          </Text>
        </View>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </Pressable>
    </Link>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ title: 'Direct Messages' }} />
      <View style={styles.container}>
        <FlatList
          data={DMS_CONVERSATIONS}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No messages yet.</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}
