import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function LogOut() {

    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text >Thanks for using KIRANAA</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        padding: 5,
        alignItems: 'center'
    },
    text: {
        marginTop: 30
    },
});
