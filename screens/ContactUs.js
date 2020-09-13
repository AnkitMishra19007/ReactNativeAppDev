import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function ContactUs() {


    return (
        <View style={styles.container}>
            <Text>Contact Us</Text>
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
});
