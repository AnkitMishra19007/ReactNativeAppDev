import React from 'react';
import { StyleSheet, Button, Image, Text, View, Alert, TouchableOpacity } from 'react-native';



export default function BuyerHome({ navigation }) {


    return (

        <View style={styles.container}>
            <Text style={styles.txt2}>--Choose any shop from below--</Text>
            <View style={styles.upper}>
                <View style={styles.left}>
                    <TouchableOpacity onPress={() => navigation.navigate('StationaryShopsCategory')}>
                        <Image source={require('../assets/stationary.png')} /></TouchableOpacity>
                    <Text style={styles.txt}>Stationary</Text>

                </View>
                <View style={styles.right}>
                    <TouchableOpacity onPress={() => navigation.navigate('GeneralShopsCategory')}>
                        <Image source={require('../assets/supermarket.png')} /></TouchableOpacity>
                    <Text style={styles.txt}>General</Text>

                </View>
            </View>
            <View style={styles.lower}>
                <View style={styles.left}>
                    <TouchableOpacity onPress={() => navigation.navigate('PlasticsShopsCategory')}>
                        <Image source={require('../assets/sand.png')} /></TouchableOpacity>
                    <Text style={styles.txt}>Plastics</Text>

                </View>
                <View style={styles.right}>
                    <TouchableOpacity onPress={() => navigation.navigate('GroceriesShopsCategory')}>
                        <Image source={require('../assets/vegetable.png')} /></TouchableOpacity>
                    <Text style={styles.txt}>Groceries</Text>
                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ddd",
        flexDirection: 'column',
    },
    txt: {
        color: '#123',
        fontSize: 17,
        padding: 4,
        alignSelf: 'center',
    },
    txt2: {
        color: '#123',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 4,
        alignSelf: 'center',
        backgroundColor: '#ddd',
    },
    upper: {
        flex: 1,
        backgroundColor: '#ddd',
        flexDirection: 'row',
    },
    lower: {
        flex: 1,
        backgroundColor: '#ddd',
        flexDirection: 'row',
    },
    left: {
        flex: 1,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'indianred',
        borderRadius: 30,
        margin: 14,
    },
    right: {
        flex: 1,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'indianred',
        borderRadius: 30,
        margin: 14,
    },
    img: {
        borderWidth: 2,
    }

});
