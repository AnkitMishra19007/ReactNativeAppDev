import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';

export default function search () {
    return (
        <View style={styles.container}>

            <View style={styles.inContainer}>
                <Text style={styles.texts}>Search product from our database</Text>
                <TextInput
                    placeholder="eg. Mustard Oil"
                    style={{ height: 40, borderRadius: 10, borderColor: '#C63D11', borderWidth: 1, marginTop: 15, fontSize: 17, fontFamily: 'Patua', padding: 5, color: '#965' }}
                />
                <View style={{ marginTop: "5%", alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity onPress={() => { this.register() }} style={styles.button}><Text style={styles.txt}>Search</Text></TouchableOpacity>
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
        width: "90%",
        backgroundColor: 'white',
        borderRadius: 10,
    },
    button: {
        borderWidth: 2,
        borderColor: '#C63D11',
        paddingTop: 13,
        paddingBottom: 13,
        paddingRight: 40,
        paddingLeft: 40,
        marginTop: 15,
        marginBottom: 20,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: '#C63D11'
    },
    txt: {
        fontFamily: 'Patua',
        fontSize: 20,
        color: 'white'
    },
    texts: {
        fontSize: 20,
        fontFamily: 'Patua',
    },
});
