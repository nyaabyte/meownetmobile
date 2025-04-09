import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const themeColors = Colors.dark;
const appFontFamily = 'Itim_400Regular';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: themeColors.background,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 34,
    fontWeight: 'normal',
    marginBottom: 25,
    textAlign: 'center',
    color: themeColors.text,
    fontFamily: appFontFamily,
  },
  searchInput: {
    height: 45,
    width: '100%',
    backgroundColor: themeColors.tabBarBackground,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: themeColors.text,
    fontFamily: appFontFamily,
    borderWidth: 1,
    borderColor: themeColors.tabBarBorder,
    marginBottom: 30,
  },
  separator: {
    marginVertical: 25,
    height: 1,
    width: '80%',
    backgroundColor: themeColors.separator,
  },
  body: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
    color: themeColors.subtleText,
    fontFamily: appFontFamily,
  },
});
