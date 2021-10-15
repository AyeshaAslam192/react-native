import React from 'react';
import { TextInput } from 'react-native';
import styles from "./AppTextInput.styles"

function AppTextInput() {
    return (
        <TextInput placeholder="name" style={styles.appTextInput} />
    );
}

export default AppTextInput;