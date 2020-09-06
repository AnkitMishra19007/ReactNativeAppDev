import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



export default function SnacksScreen() {


    return (
        <View style={styles.container}>
            <Text>
                Snacks
            </Text>
            <Image
                style={styles.img}
                source={require('../assets/warning.png')}
            />


        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    img: {
        width: 300,
        height: 300,
        position: 'absolute',
        left: '15%',
        top: '20%',
    },
});
