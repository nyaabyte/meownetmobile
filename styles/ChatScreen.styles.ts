// styles/ChatScreen.styles.ts
import { StyleSheet, Platform } from 'react-native';
import Colors from '../constants/Colors';

const themeColors = Colors.dark;

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: themeColors.background,
  },
  container: {
    flex: 1,
  },

  messageListContent: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  messageBubbleBase: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginBottom: 8,
    maxWidth: '80%',
  },
  myMessageBubble: {
    backgroundColor: themeColors.tint,
    alignSelf: 'flex-end',
    borderBottomRightRadius: 5,
  },
  otherMessageBubble: {
    backgroundColor: '#333',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 5,
  },
  myMessageText: {
    color: themeColors.background,
  },
  otherMessageText: {
    color: themeColors.text,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: themeColors.tint + '30',
    backgroundColor: themeColors.background,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#2c2c2e',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    color: themeColors.text,
  },
  sendButton: {
    padding: 10,
  },
  sendButtonText: {
    color: themeColors.tint,
    fontWeight: 'bold',
  },

  timestampText: {
    fontSize: 10,
    color: themeColors.subtleText,
    marginTop: 4,
  },
  myTimestamp: {
    alignSelf: 'flex-end',
    marginRight: 5,
  },
  otherTimestamp: {
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
});
