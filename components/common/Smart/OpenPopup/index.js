import React, { useState } from 'react';
import { Text, View, TouchableWithoutFeedback, } from 'react-native';
import styles from "./OpenPopup.styles"
import AppPopup from '../../../shared/popups/AppPopup';

function OpenPopup() {
    const [modalVisible, setModalVisisble] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisisble(true)}>
                <View style={styles.modalBtn}>
                    <Text style={styles.modalTxt}>Join</Text>
                </View>
            </TouchableWithoutFeedback>
            <AppPopup modalVisible={modalVisible} setModalVisisble={setModalVisisble} />
        </>
    );
}

export default OpenPopup;