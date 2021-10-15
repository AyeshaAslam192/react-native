import React from 'react';
import { View } from 'react-native';
import { useTheme } from "../providers/themeProvider";
import ThemeSwitcher from '../components/common/Smart/themeSwitcher';

export default function Wrapper() {
  const { colors } = useTheme();
  
  return (
    <View style={{backgroundColor: colors.bg, flex: 1 }}>
      <ThemeSwitcher/>
     </View>
  );
}