import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const themeColors = Colors.dark;
const appFontFamily = 'Itim_400Regular';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: themeColors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  errorText: {
    color: themeColors.text,
    fontFamily: appFontFamily,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },

  repliesContainer: {
    marginTop: 25,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: themeColors.separator,
  },
  repliesHeader: {
    color: themeColors.text,
    fontFamily: appFontFamily,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    paddingLeft: 5,
  },
  noRepliesText: {
    color: themeColors.subtleText,
    fontFamily: appFontFamily,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    paddingLeft: 15,
  },
});
