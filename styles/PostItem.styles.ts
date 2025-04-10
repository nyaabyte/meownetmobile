// styles/PostItem.styles.ts

import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const themeColors = Colors.dark;
const appFontFamily = 'Itim_400Regular';

export default StyleSheet.create({
  container: {
    backgroundColor: themeColors.tabBarBackground,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: themeColors.tabBarBorder,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: themeColors.subtleText,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    color: themeColors.text,
    fontFamily: appFontFamily,
    fontSize: 16,
    fontWeight: '600',
  },
  date: {
    color: themeColors.subtleText,
    fontFamily: appFontFamily,
    fontSize: 12,
  },
  title: {
    color: themeColors.text,
    fontFamily: appFontFamily,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  content: {
    color: themeColors.text,
    fontFamily: appFontFamily,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  tag: {
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 6,
    marginBottom: 6,
  },
  tagText: {
    color: themeColors.text,
    fontFamily: appFontFamily,
    fontSize: 11,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: themeColors.separator,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  score: {
    color: themeColors.subtleText,
    fontFamily: appFontFamily,
    fontSize: 13,
    marginLeft: 4,
  },
  replyCount: {
    color: themeColors.subtleText,
    fontFamily: appFontFamily,
    fontSize: 13,
    marginLeft: 4,
  },
  avatarPlaceholder: {
    backgroundColor: themeColors.subtleText,
  },
});
