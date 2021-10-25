import React from 'react';
import styles from './loaderScreen.styles'
import { View, Image } from 'react-native';

const LoaderScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../../../../assets/loader.gif')}/>
        </View>
    );
}

export default LoaderScreen;