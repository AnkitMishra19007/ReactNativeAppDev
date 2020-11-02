import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';

export default function search () {
    return (
        <View style={styles.container}>

            <View style={styles.inContainer}>
                <Text style={styles.texts}>Search product from our database</Text>
                <TextInput
                    placeholder="product name"
                    style={{ height: 40, borderRadius: 10, borderColor: '#008399', borderWidth: 1, marginTop: 5, fontSize: 17, padding: 5, color: '#008399' }}
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
        marginTop: "5%",
        width: "90%",
        backgroundColor: 'white',
        borderRadius: 10
    },
    button: {
        borderWidth: 2,
        borderColor: '#318290',
        paddingTop: 13,
        paddingBottom: 13,
        paddingRight: 40,
        paddingLeft: 40,
        marginTop: 15,
        marginBottom: 20,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: '#9BE3FF'
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#383A3E'
    },
    texts: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
