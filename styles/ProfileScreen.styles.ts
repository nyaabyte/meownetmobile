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
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  avatarContainer: {
    padding: 5,
    marginBottom: 20,
    shadowColor: Colors.nyabyte.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8,
    backgroundColor: themeColors.background,
    borderRadius: 80,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    resizeMode: 'cover',
  },
  avatarPlaceholder: {
    backgroundColor: themeColors.subtleText,
  },
  username: {
    color: themeColors.text,
    fontFamily: appFontFamily,
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 15,
    maxWidth: '90%',
  },
  badgeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: themeColors.tabBarBackground,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 8,
    margin: 3,
  },
  badgeIcon: {
    marginRight: 4,
  },
  badgeText: {
    color: themeColors.text,
    fontFamily: appFontFamily,
    fontSize: 11,
    fontWeight: '600',
  },
  bio: {
    color: themeColors.subtleText,
    fontFamily: appFontFamily,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    backgroundColor: themeColors.tabBarBackground,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: appFontFamily,
    color: themeColors.text,
    borderWidth: 1,
    borderColor: themeColors.tabBarBorder,
    marginBottom: 15,
    textAlignVertical: 'top',
  },
  bioInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  editSectionHeader: {
    color: themeColors.text,
    fontFamily: appFontFamily,
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  badgeSelectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: themeColors.separator,
  },
  badgeSelectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: themeColors.tabBarBorder,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 10,
    margin: 4,
    opacity: 0.6,
  },
  badgeSelectItem_selected: {
    borderColor: Colors.nyabyte.primary,
    backgroundColor: themeColors.tabBarBackground,
    opacity: 1.0,
  },
  badgeSelectIcon: {
    marginRight: 5,
  },
  badgeSelectName: {
    color: themeColors.text,
    fontFamily: appFontFamily,
    fontSize: 13,
  },
  badgeSelectName_deselected: {
    color: themeColors.subtleText,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  button: {
    backgroundColor: Colors.nyabyte.primary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
    minWidth: 120,
    marginHorizontal: 5,
  },
  saveButton: {},
  cancelButton: {
    backgroundColor: themeColors.subtleText,
  },
  buttonText: {
    color: themeColors.text,
    fontFamily: appFontFamily,
    fontSize: 16,
    fontWeight: '600',
  },
});
