import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function search () {
    return (
        <View style={styles.container}>

            <View style={styles.inContainer}>
                <Text style={{ fontSize: 18 }}>Search product from our database</Text>
                <TextInput
                    placeholder="product name"
                    style={{ marginTop: "2%", height: 40, borderColor: 'gray', borderWidth: 1, }}
                />
                <View style={{ marginTop: "5%", alignItems: 'center', justifyContent: 'center', }}>
                    <Button
                        title="Search"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: "5%"

    },
    inContainer: {

        height: "100%",
        marginTop: "5%",
        width: "90%",
        backgroundColor: 'white',
        borderRadius: 10
    },

});