import React from 'react';
import LoginView from '../views/loginView';
import { useTheme } from '../providers/themeProvider';
import ThemeSwitcher from '../components/common/Smart/themeSwitcher';
import DrawerNavigator from './drawerNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const { colors } = useTheme();

    return(
            <Stack.Navigator>
                <Stack.Screen 
                    name="LogIn"
                    component={LoginView} 
                    options={{
                        headerStyle: {backgroundColor: colors.headerBg},
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <ThemeSwitcher/>
                        ),}}
                />
                <Stack.Screen 
                    name="Drawer"
                    component={DrawerNavigator} 
                    options={{
                        headerStyle: {backgroundColor: colors.headerBg},
                        headerTintColor: '#fff',
                        headerShown: false,
                        headerRight: () => (
                            <ThemeSwitcher/>
                        ),}}
                />
                 
            </Stack.Navigator>
    )
};

export default StackNavigator;