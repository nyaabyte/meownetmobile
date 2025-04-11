import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  SafeAreaView,
} from 'react-native';
import { Link, Stack } from 'expo-router';
import styles from '../../styles/DMsScreen.styles';
import { api } from '@/network/api';

interface RawDMItem {
  id: string;
  other_user_name: string;
  last_message: string;
  timestamp: string;
  avatar_url: string;
}

class DMListItem {
  id: string;
  otherUserName: string;
  lastMessage: string;
  timestamp: string;
  avatarUrl: string;

  constructor(data: RawDMItem) {
    this.id = data.id;
    this.otherUserName = data.other_user_name;
    this.lastMessage = data.last_message;
    this.timestamp = data.timestamp;
    this.avatarUrl = data.avatar_url;
  }
}

async function getDMs(): Promise<Array<DMListItem>> {
  try {
    const ret = await api('dmlist');
    if (ret && ret.dmlist && Array.isArray(ret.dmlist)) {
      return ret.dmlist.map((x: RawDMItem) => new DMListItem(x));
    }
    console.warn('API response format unexpected:', ret);
    return [];
  } catch (error) {
    console.error('Failed to fetch DMs:', error);
    return [];
  }
}

export default function DMsScreen() {
  const [dms, setDms] = useState<DMListItem[]>([]);

  useEffect(() => {
    const fetchDms = async () => {
      const fetchedDms = await getDMs();
      setDms(fetchedDms);
    };
    fetchDms();
  }, []);

  const renderItem = ({ item }: { item: DMListItem }) => (
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
          data={dms}
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
