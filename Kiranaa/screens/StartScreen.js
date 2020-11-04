import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function StartScreen({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.imgcon}>
                <View style={styles.img}>
                    <Image source={require('../assets/Kiranaa.png')} />

                </View>
            </View>

            <View style={styles.con2}>
                <TouchableOpacity style={styles.shop} onPress={() => navigation.navigate('LogInShopOwner')} >
                    <Text style={styles.txt1} >Shop Owner</Text>
                </TouchableOpacity>
                <Text style={styles.line}>-------------------------------------------------------------------</Text>
                <TouchableOpacity style={styles.cust} onPress={() => navigation.navigate('LogInCustomer')}>
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
        flex: 1.1,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',

    },
    con2: {
        flex: 1.7,
        paddingTop: 10,
        alignItems: 'center',
        backgroundColor: '#ddd',
        flexDirection: 'column',
    },
    con3: {
        flex: 0.4,
        backgroundColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
    },
    img: {
        marginTop: 5,
        resizeMode: 'contain',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: 'teal',
    },
    title: {
        alignSelf: 'center',
        fontSize: 34,
        color: 'teal',
        fontFamily: 'Patua',
    },
    shop: {
        margin: 9,
        borderRadius: 30,
        borderColor: '#092A81',
        borderWidth: 3,
        padding: 20,
        backgroundColor: '#092A81',
    },
    cust: {
        margin: 9,
        borderRadius: 30,
        borderColor: '#C63D11',
        borderWidth: 3,
        padding: 20,
        backgroundColor: '#C63D11',
    },
    txt1: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Patua',
    },
    feed: {
        borderRadius: 10,
        borderColor: '#4A923B',
        borderWidth: 2,
        padding: 14,
        backgroundColor: '#4A923B',
    },
    txt2: {
        fontSize: 17,
        color: 'white',
        fontFamily: 'Patua',
    },
    line: {
        color: 'teal',
    }

});
