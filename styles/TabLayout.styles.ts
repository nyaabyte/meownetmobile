// styles/TabLayout.styles.ts

import { StyleSheet, Platform } from 'react-native';
import Colors from '../constants/Colors';

const themeColors = Colors.dark;
const pillHeight = 65;

export default StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 30 : 20,
    left: 10,
    right: 20,
    height: pillHeight,
    borderRadius: pillHeight / 2,
    backgroundColor: themeColors.tabBarBackground,
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
    paddingBottom: 5,
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: '600',
  },
  tabBarIconContainer: {},
});
