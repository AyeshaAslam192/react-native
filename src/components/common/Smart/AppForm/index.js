import React from 'react';
import { useTheme } from "../../../../providers/themeProvider";
import { Text, TouchableOpacity, View } from 'react-native';
import ScreenWrapper from '../../../layouts/ScreenWrapper';
import styles from './AppForm.styles';
import AppTextInput from '../../Presentational/AppTextInput';

function AppForm() {
    const { colors } = useTheme();

    return (
        <ScreenWrapper>
            <Text style={[styles.formHeading, {color: colors.formHeader}]}>Form</Text>
            <View style={styles.formView}>
                <AppTextInput 
                    placeholder="Email" 
                    password={false} 
                    txtColor={colors.formTxt} 
                    placeholderColor={colors.placeholderTxt} 
                />
                <AppTextInput 
                    placeholder="Password" 
                    password={true} 
                    txtColor={colors.formTxt} 
                    placeholderColor={colors.placeholderTxt} 
                />
                <TouchableOpacity 
                    style={styles.submitBtn} 
                    onPress={() => alert("Logged In!!!")} 
                >
                    <Text style={styles.submitText}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </ScreenWrapper>
    );
}

export default AppForm;