const nyabytePink = '#F472B6';
const nyabyteDarkBg = '#121212';
const nyabyteText = '#FFFFFF';
const nyabyteSubtleText = '#A0A0A0';
const nyabyteInactive = '#888888';
const nyabyteBorder = '#333333';

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: nyabytePink,
    tabIconDefault: '#ccc',
    tabIconSelected: nyabytePink,
    tabBarBackground: '#fefefe',
    tabBarBorder: '#eee',
  },

  dark: {
    text: nyabyteText,
    background: nyabyteDarkBg,
    tint: nyabytePink,
    tabIconDefault: nyabyteInactive,
    tabIconSelected: nyabytePink,
    tabBarBackground: '#1C1C1E',
    tabBarBorder: nyabyteBorder,
    subtleText: nyabyteSubtleText,
    separator: nyabyteBorder,
  },

  nyabyte: {
    primary: nyabytePink,
    background: nyabyteDarkBg,
    text: nyabyteText,
  },
};
