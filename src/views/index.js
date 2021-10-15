import React from 'react';
import { View } from 'react-native';
import { useTheme } from "../providers/themeProvider";
import StackNavigator from '../navigators/stackNavigator';

export default function Wrapper() {
  const { colors } = useTheme();
  
  return (
    <View style={{backgroundColor: colors.bg, flex: 1 }}>
          <StackNavigator/>
     </View>
  );
}