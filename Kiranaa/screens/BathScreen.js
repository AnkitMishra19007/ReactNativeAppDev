import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';



export default function BathScreen() {

    return (
        <View style={styles.container}>
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
        justifyContent: 'center',
        alignItems: 'center',

    },
    img: {
        width: 128,
        height: 128,
    },
});
