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
    justifyContent: 'center',
    padding: 25,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'normal',
    marginBottom: 15,
    textAlign: 'center',
    color: themeColors.text,
    fontFamily: appFontFamily,
  },
  body: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    color: themeColors.subtleText,
    fontFamily: appFontFamily,
  },
});
