import React from 'react';
import { StyleSheet, Text, Image, View, } from 'react-native';



export default function BathScreen() {


    return (
        <View style={styles.container}>
            <Text>
                Bath
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
