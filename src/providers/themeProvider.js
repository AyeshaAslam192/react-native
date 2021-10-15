import React from 'react';
import { useSelector } from 'react-redux';
import { darkColors } from '../styles/darkTheme.styles';
import { lightColors } from '../styles/lightTheme.styles';

export const ThemeContext = React.createContext({
    isDark: false,
    colors: lightColors,
    setScheme: () => {},
});

const ThemeProvider = ({children}) => {
  const theme = useSelector(({theme})=> theme.themeShade);
  const isDark = theme === 'dark';
  const defaultTheme = {
        isDark,
        // Chaning color schemes according to theme
        colors: isDark ? darkColors : lightColors,
   };
  
  return (
    <ThemeContext.Provider value={defaultTheme}>
           {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

export const useTheme = () => React.useContext(ThemeContext);