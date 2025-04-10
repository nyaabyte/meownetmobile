
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors'; 

const themeColors = Colors.dark;
const appFontFamily = 'Itim_400Regular';

export default StyleSheet.create({
  container: {
    backgroundColor: themeColors.background,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    marginLeft: 15,
    borderLeftWidth: 2,
    borderLeftColor: themeColors.separator,
    width: '95%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  avatar: {
    width: 28, 
    height: 28,
    borderRadius: 14, 
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
    fontSize: 14,
    fontWeight: '600',
  },
  date: {
    color: themeColors.subtleText,
    fontFamily: appFontFamily,
    fontSize: 11,
  },
  content: {
    color: themeColors.text,
    fontFamily: appFontFamily,
    fontSize: 14,
    lineHeight: 20,
  },
});
