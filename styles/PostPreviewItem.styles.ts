import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const themeColors = Colors.dark;
const appFontFamily = 'Itim_400Regular';

export default StyleSheet.create({
  pressableContainer: {
    width: '100%',
    marginBottom: 15,
  },

  container: {
    backgroundColor: themeColors.tabBarBackground,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: themeColors.tabBarBorder,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 8,
    backgroundColor: themeColors.tabBarBackground,
  },

  avatarPlaceholder: {
    backgroundColor: themeColors.subtleText,
  },

  userInfo: {
    flex: 1,
  },

  username: {
    color: themeColors.text,
    fontFamily: appFontFamily,
    fontSize: 15,
    fontWeight: '600', // Semi-bold
  },

  date: {
    color: themeColors.subtleText,
    fontFamily: appFontFamily,
    fontSize: 11,
  },

  title: {
    color: themeColors.text,
    fontFamily: appFontFamily,
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 6,
  },

  contentPreview: {
    color: themeColors.subtleText,
    fontFamily: appFontFamily,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: themeColors.separator,
  },
  footerText: {
    color: themeColors.subtleText,
    fontFamily: appFontFamily,
    fontSize: 12,
  },
});
