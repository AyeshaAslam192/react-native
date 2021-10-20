import React from 'react';
import { View } from 'react-native';
import AppCard from '../../Presentational/AppCard';

const mockData = [
    {
        title: "Couch",
        subtitle: "$210",
        img:require("../../../../../assets/couch.jpg")
    },
]

const DisplayCards = () => {
    return (
        <View>
            {
                mockData.map(card => (
                    <AppCard key={card.title} title={card.title} subtitle={card.subtitle} img={card.img} />
                ))
            }
        </View>
    );
}

export default DisplayCards;