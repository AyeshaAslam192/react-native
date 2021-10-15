import React from 'react';
import LoginView from '../views/loginView';
import { useTheme } from '../providers/themeProvider';
import ThemeSwitcher from '../components/common/Smart/themeSwitcher';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const { colors } = useTheme();
    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: colors.bg,
        },
      };
    return(
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator>
                <Stack.Screen 
                name="LogIn"
                component={LoginView} 
                options={{
                    headerStyle: {backgroundColor: colors.headerBg},
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <ThemeSwitcher/>
                      ),
                }}/>
            {/* <Stack.Screen name="AddItem" component={AddItem} />
            <Stack.Screen name="ViewItems" component={ViewItems} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default StackNavigator;