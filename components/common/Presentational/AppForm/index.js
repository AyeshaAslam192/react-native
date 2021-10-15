import React from 'react';
import { Text, View } from 'react-native';
import ScreenWrapper from '../../../layouts/ScreenWrapper';
import styles from "./AppForm.styles"
import AppTextInput from '../AppTextInput';

function AppForm() {
    return (
        <ScreenWrapper>
            <Text style={styles.formHeading}>Form</Text>
            <View style={styles.formView}>
                <AppTextInput />
            </View>
        </ScreenWrapper>
    );
}

export default AppForm;