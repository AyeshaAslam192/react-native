import React from 'react';
import HomeView from '../views/homeView/homeView';
import { useTheme } from '../providers/themeProvider';
import ThemeSwitcher from '../components/common/Smart/themeSwitcher';
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const { colors } = useTheme();
    return(
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                backgroundColor: colors.drawerBg,
                },
            }}
        >
           <Drawer.Screen 
             name="Home" 
             component={HomeView}
             options={{ 
                 drawerLabel: 'Home',
                 headerStyle: {backgroundColor: colors.headerBg},
                 headerTintColor: '#fff', 
                 headerRight: () => (
                    <ThemeSwitcher/>
                ),
                }} 
           />
        </Drawer.Navigator>
    )
};

export default DrawerNavigator;