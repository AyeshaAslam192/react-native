import React from 'react';
import { View } from 'react-native';
import AppForm from '../../components/common/Smart/AppForm';
import AppDatePicker from '../../components/common/Smart/AppDatePicker';

const LoginView = ({navigation}) => (
    <View>
        {/* <AppForm navigation={navigation}/> */}
        <AppDatePicker />
    </View>
)
   

export default LoginView;
