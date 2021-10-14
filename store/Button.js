import React from 'react';
import { Text } from 'react-native';
import { Button, View, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { switchTheme } from './theme/themeActions';
import { toggleMenu } from './app/appActions';
import { useDispatch } from 'react-redux';

export default function AppButton() {
    const theme = useSelector(({theme}) => theme.themeShade);
    const app = useSelector(({app}) => app.isMenuVisible);
    console.log(theme, app);
    const dispatch = useDispatch();
    const toggleTheme = ()=>{
       dispatch(switchTheme('dark'));
       dispatch(toggleMenu(true));
    }
  return (
    <View style={{marginTop: StatusBar.currentHeight+30}}>
         <Button title="abcbbbb" onPress={toggleTheme}/>
         <Text>abc</Text>
    </View>
  );
}