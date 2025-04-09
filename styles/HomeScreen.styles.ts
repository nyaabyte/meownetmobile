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
    justifyContent: 'flex-start',
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 20,
  },
  logo: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    marginBottom: -150,
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
