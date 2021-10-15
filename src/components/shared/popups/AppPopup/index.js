import React from 'react';
import { Text, Modal, } from 'react-native';
import styles from "./AppPopup.styles"

function AppPopup({modalVisible, setModalVisisble}) {
    return (
        <Modal visible={modalVisible} animationType="slide">
            <Text style={styles.closeBtn} onPress={() => setModalVisisble(false)}>X</Text>
        </Modal>
    );
}

export default AppPopup;