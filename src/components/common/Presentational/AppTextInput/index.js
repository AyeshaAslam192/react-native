import React from 'react';
import { TextInput } from 'react-native';
import styles from './AppTextInput.styles';

const AppTextInput = ({placeholder, password, txtColor, placeholderColor, onChangeText}) => {
    return (
        <TextInput
           placeholder={placeholder} 
           style={[styles.appTextInput, {color:txtColor}]}
           secureTextEntry={password}
           onChangeText={onChangeText}
           placeholderTextColor={placeholderColor} />
    );
}

export default AppTextInput;