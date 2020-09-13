import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function StartScreen({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.imgcon}>
                <View style={styles.img}>
                    <Image source={require('../assets/newLogo.png')} />

                </View>
            </View>

            <View style={styles.con2}>
                <TouchableOpacity style={styles.shop} onPress={() => navigation.navigate('LogInShopOwner')} >
                    <Text style={styles.txt1} >Shop Owner</Text>
                </TouchableOpacity>
                <Text style={styles.line}>-------------------------------------------------------------------</Text>
                <TouchableOpacity style={styles.shop} onPress={() => navigation.navigate('LogInCustomer')}>
                    <Text style={styles.txt1}>Customer</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.con3}>
                <TouchableOpacity style={styles.feed} onPress={() => navigation.navigate('AboutUs')}>
                    <Text style={styles.txt2}>About Us</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.feed} onPress={() => navigation.navigate('ContactUs')}>
                    <Text style={styles.txt2}>Contact Us</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    imgcon: {
        flex: 1.4,
        backgroundColor: '#c9b5aa',
        justifyContent: 'center',
        alignItems: 'center',

    },
    con2: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: '#c9b5aa',
        flexDirection: 'column',
    },
    con3: {
        flex: 0.5,
        backgroundColor: '#c9b5aa',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
    },
    img: {
        marginTop: 30,
        resizeMode: 'contain',
    },
    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 34,
        color: 'teal',
    },
    shop: {
        margin: 27,
        borderRadius: 30,
        borderColor: 'teal',
        borderWidth: 3,
        padding: 20,
    },
    txt1: {
        fontSize: 20,
        color: 'teal',
        fontWeight: 'bold',
    },
    feed: {
        borderRadius: 10,
        borderColor: 'teal',
        borderWidth: 2,
        padding: 14,
    },
    txt2: {
        fontSize: 11,
        color: 'teal',
        fontWeight: 'bold',
    },
    line: {
        color: 'teal',
    }

});