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
  title: {
    fontSize: 34,
    fontWeight: 'normal',
    marginBottom: 25,
    textAlign: 'center',
    color: themeColors.text,
    fontFamily: appFontFamily,
  },
  logoContainer: {
    padding: 5,
    marginBottom: 25,
    shadowColor: Colors.nyabyte.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8,
    backgroundColor: themeColors.background,
    borderRadius: 80,
  },
  logo: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    borderRadius: 70,
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
