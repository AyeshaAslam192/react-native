import React from 'react';
import { View } from 'react-native';
import { useTheme } from "../providers/themeProvider";
import StackNavigator from '../navigators/stackNavigator';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

export default function Wrapper() {
  const { colors } = useTheme();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.bg,
    },
  };
  return (
    <View style={{backgroundColor: colors.bg, flex: 1 }}>
      <NavigationContainer theme={MyTheme}>
          <StackNavigator/>
      </NavigationContainer>
     </View>
  );
}