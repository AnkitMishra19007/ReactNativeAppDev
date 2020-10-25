import React from 'react';
import { StyleSheet, Button, Image, Text, View, Alert, TouchableOpacity} from 'react-native';



export default function BuyerHome() {


    return (

        <View style={styles.container}>
            <Text style={styles.txt2}>--Choose any shop from below--</Text>
            <View style={styles.upper}>
                <View style={styles.left}>
                    <TouchableOpacity>
                    <Image source={require('../assets/stationary.png')} /></TouchableOpacity>
                    <Text style={styles.txt}>John's Stationary</Text>
                    
                </View>
                <View style={styles.right}>
                    <TouchableOpacity>
                    <Image source={require('../assets/supermarket.png')} /></TouchableOpacity>
                    <Text style={styles.txt}>Robbin's General</Text>
                    
                </View>
            </View>
            <View style={styles.lower}>
                <View style={styles.left}>
                    <TouchableOpacity>
                    <Image source={require('../assets/sand.png')} /></TouchableOpacity>
                    <Text style={styles.txt}>Logan Plastics</Text>
                    
                </View>
                <View style={styles.right}>
                    <TouchableOpacity>
                    <Image source={require('../assets/vegetable.png')} /></TouchableOpacity>
                    <Text style={styles.txt}>Jaggu Groceries</Text>
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
    txt:{
        color: '#123',
        fontSize: 17,
        padding: 4,
        alignSelf: 'center',
    },
    txt2:{
        color: '#123',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 4,
        alignSelf: 'center',
        backgroundColor: '#ddd',
    },
    upper:{
        flex:1,
        backgroundColor: '#ddd',
        flexDirection: 'row',
    },
    lower:{
        flex:1,
        backgroundColor: '#ddd',
        flexDirection: 'row',
    },
    left:{
        flex: 1,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'indianred',
        borderRadius: 30,
        margin: 14,
    },
    right:{
        flex:1,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'indianred',
        borderRadius: 30,
        margin: 14,
    },
    img:{
        borderWidth: 2,
    }

});
