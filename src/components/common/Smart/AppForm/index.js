import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from "../../../../providers/themeProvider";
import { Text, TouchableOpacity, View } from 'react-native';
import { detectLang } from '../../../../helpers/localization/localization';
import ScreenWrapper from '../../../layouts/ScreenWrapper';
import styles from './AppForm.styles';
import { checkValidEmail } from '../../../../helpers/utils/utils';
import AppTextInput from '../../Presentational/AppTextInput';
import { fetchLoginCredentials } from '../../../../store/login/loginActions';

const AppForm = ({navigation}) => {
    const { colors } = useTheme();
    const [email, setEmail] =  useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const dispatch = useDispatch();
    const setConstants = detectLang().t;

    const handleSubmit= () => {
        if(!email || !checkValidEmail(email)) setEmailError('invalid email');
        if(!password) setPasswordError('password should not be empty');
        if(checkValidEmail(email)) setEmailError('');
        if(password && checkValidEmail(email)) 
        { 
            setPasswordError('');
            setEmailError('');
            // const user = {
            //     email: email,
            //     password: password,
            // }
            navigation.navigate("Drawer");
        //    dispatch(fetchLoginCredentials(user));
        }
        
   }

    return (
        <ScreenWrapper>
            <Text style={[styles.formHeading, {color: colors.formHeader}]}>{setConstants('FORM')}</Text>
            <View style={styles.formView}>
                <AppTextInput 
                    placeholder="Email" 
                    password={false} 
                    onChangeText={text => setEmail(text)}
                    txtColor={colors.formTxt} 
                    placeholderColor={colors.placeholderTxt} 
                />
                { emailError?.length ?  <Text style={styles.errorText}>{emailError}</Text> : <Text style={{display: 'none'}}></Text> }
                <AppTextInput 
                    placeholder="Password" 
                    password={true} 
                    onChangeText={text => setPassword(text)}
                    txtColor={colors.formTxt} 
                    placeholderColor={colors.placeholderTxt} 
                />
                { passwordError?.length ?  <Text style={styles.errorText}>{passwordError}</Text> : <Text style={{display: 'none'}}></Text> }
                <TouchableOpacity 
                    style={styles.submitBtn} 
                    onPress={handleSubmit} 
                >
                    <Text style={styles.submitText}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </ScreenWrapper>
    );
}

export default AppForm;