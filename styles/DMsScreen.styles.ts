// styles/DMsScreen.styles.ts
import { StyleSheet } from 'react-native';
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
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: themeColors.tint + '30',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: themeColors.subtleText,
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: themeColors.text,
    marginBottom: 4,
  },
  lastMessage: {
    fontSize: 14,
    color: themeColors.subtleText,
  },
  timestamp: {
    fontSize: 12,
    color: themeColors.subtleText,
    marginLeft: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: themeColors.subtleText,
  },
});
