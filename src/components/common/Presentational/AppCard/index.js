import React from 'react';
import { Image, Text, View, } from 'react-native';
import { useTheme } from "../../../../providers/themeProvider";
import styles from "./AppCard.styles";

const AppCard = ({title, subtitle, img}) => {
    const { colors } = useTheme();

    return (
        <View style={[styles.appCard, {backgroundColor: colors.cardBg}]}>
            <Image source={img} style={styles.cardImg} />
            <View style={styles.cardBody}>
                <Text style={[styles.name, {color: colors.cardTxt}]}>{title}</Text>
                <Text style={styles.price}>{subtitle}</Text>
            </View>
        </View>
    );
}

export default AppCard;