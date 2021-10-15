import React from 'react';
import { View } from 'react-native';
import { useTheme } from "../providers/themeProvider";
import StackNavigator from '../navigators/stackNavigator';
import ThemeSwitcher from '../components/common/Smart/themeSwitcher';
import AppForm from '../components/common/Presentational/AppForm';
import ScreenWrapper from '../components/layouts/ScreenWrapper';

export default function Wrapper() {
  const { colors } = useTheme();
  
  return (
    <View style={{backgroundColor: colors.bg, flex: 1 }}>
          <StackNavigator/>
     </View>
  );
}