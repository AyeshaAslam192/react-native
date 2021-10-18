import React from 'react';
import { TextInput } from 'react-native';
import styles from './AppTextInput.styles';

const AppTextInput = ({placeholder, password, txtColor, placeholderColor}) => {
    return (
        <TextInput
           placeholder={placeholder} 
           style={[styles.appTextInput, {color:txtColor}]}
           secureTextEntry={password}
           placeholderTextColor={placeholderColor} />
    );
}

export default AppTextInput;