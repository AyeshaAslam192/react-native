import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-native';
import { switchTheme } from '../../../../store/theme/themeActions';
import { useTheme } from '../../../../providers/themeProvider';

export default function ThemeSwitcher() {
  const { isDark } = useTheme();
  const dispatch = useDispatch();
  const [toggleTheme, setToggleTheme] = useState(isDark);

  useEffect(()=>{
    if(toggleTheme){
      dispatch(switchTheme('dark'));
    }
    else{
      dispatch(switchTheme('light'));
    }
  }, [toggleTheme])
  
  return (
      <Switch value={toggleTheme} onValueChange={newVal => setToggleTheme(newVal)}/>
  );
}