import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';



export default function AddProduct() {


    return (
        <View style={styles.container}>
            <Text>Add new product</Text>
        </View >
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
