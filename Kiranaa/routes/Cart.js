import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';



export default function Cart() {


    return (
        <View style={styles.container}>
            <Text>CART IS EMPTY RIGHT NOW</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3D3D3",
        justifyContent: 'center',
        alignItems: 'center',

    },

});
