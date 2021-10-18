import React from 'react';
import { useTheme } from "../../../../providers/themeProvider";
import { Text, TouchableOpacity, View } from 'react-native';
import { detectLang } from '../../../../helpers/localization';
import ScreenWrapper from '../../../layouts/ScreenWrapper';
import styles from './AppForm.styles';
import AppTextInput from '../../Presentational/AppTextInput';

const AppForm = () => {
    const { colors } = useTheme();
    const setConstants = detectLang().t;

    return (
        <ScreenWrapper>
            <Text style={[styles.formHeading, {color: colors.formHeader}]}>{setConstants('FORM')}</Text>
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
                    onPress={() => navigation.navigate('Drawer')} 
                >
                    <Text style={styles.submitText}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </ScreenWrapper>
    );
}

export default AppForm;