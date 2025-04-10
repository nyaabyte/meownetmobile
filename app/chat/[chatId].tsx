// app/chat/[chatId].tsx
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import {
  CHAT_MESSAGES,
  Message,
  DMS_CONVERSATIONS,
} from '../../constants/PlaceholderDMs';
import styles from '../../styles/ChatScreen.styles';
import Colors from '../../constants/Colors';

export default function ChatScreen() {
  const themeColors = Colors.dark;
  const { chatId } = useLocalSearchParams<{ chatId: string }>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const flatListRef = useRef<FlatList>(null);

  const conversation = DMS_CONVERSATIONS.find((conv) => conv.id === chatId);

  useEffect(() => {
    if (chatId) {
      setMessages(CHAT_MESSAGES[chatId] || []);
    }
  }, [chatId]);

  const handleSend = () => {
    if (newMessage.trim() === '') return;

    const messageToSend: Message = {
      id: `msg-${Date.now()}`,
      text: newMessage.trim(),
      sender: 'me',
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages((prevMessages) => [messageToSend, ...prevMessages]);
    setNewMessage('');
  };

  const renderMessageItem = ({ item }: { item: Message }) => {
    const isMyMessage = item.sender === 'me';
    return (
      <View>
        <View
          style={[
            styles.messageBubbleBase,
            isMyMessage ? styles.myMessageBubble : styles.otherMessageBubble,
          ]}
        >
          <Text
            style={isMyMessage ? styles.myMessageText : styles.otherMessageText}
          >
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen
        options={{ title: conversation?.otherUserName || 'Chat' }}
      />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessageItem}
          keyExtractor={(item) => item.id}
          inverted
          contentContainerStyle={styles.messageListContent}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={newMessage}
            onChangeText={setNewMessage}
            placeholder="Type a message..."
            placeholderTextColor={themeColors.subtleText}
          />
          <Pressable onPress={handleSend} style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
