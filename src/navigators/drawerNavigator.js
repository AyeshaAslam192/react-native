import React from 'react';
import HomeView from '../views/homeView/homeView';
import DisplayCards from '../components/common/Smart/DisplayCard';
import { useTheme } from '../providers/themeProvider';
import ThemeSwitcher from '../components/common/Smart/themeSwitcher';
import { createDrawerNavigator } from '@react-navigation/drawer'
import AppDropdown from '../components/common/Smart/AppDropdown';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const { colors } = useTheme();
    return(
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                backgroundColor: colors.drawerBg,
                },
                headerStyle: {backgroundColor: colors.headerBg},
                headerTintColor: '#fff', 
                headerRight: () => (
                   <ThemeSwitcher/>
               ),
            }}
        >
           <Drawer.Screen 
             name="Home" 
             component={HomeView}
           />
           <Drawer.Screen 
             name="Cards" 
             component={DisplayCards}
           />
            <Drawer.Screen 
             name="Dropdown" 
             component={AppDropdown}
           />
        </Drawer.Navigator>
    )
};

export default DrawerNavigator;