import React from 'react';
import { View } from 'react-native';
import styles from './ScreenWrapper.styles';

const ScreenWrapper = ({children}) => {
    return (
        <View style={styles.screen}>
            {children}
        </View>
    );
}

export default ScreenWrapper;