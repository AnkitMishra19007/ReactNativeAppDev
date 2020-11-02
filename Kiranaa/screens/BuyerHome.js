import React from 'react';
import { StyleSheet, Button, Image, Text, View, Alert, TouchableOpacity} from 'react-native';



export default function BuyerHome() {


    return (

        <View style={styles.container}>
            <Text style={styles.txt2}>Choose any shop from below</Text>
            <View style={styles.upper}>
                <View style={styles.left}>
                    <TouchableOpacity>
                    <Image source={require('../assets/stationary.png')} />
                    <Text style={styles.txt}>John's Stationary</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.right}>
                    <TouchableOpacity>
                    <Image source={require('../assets/supermarket.png')} />
                    <Text style={styles.txt}>Robbin's General</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.lower}>
                <View style={styles.left}>
                    <TouchableOpacity>
                    <Image source={require('../assets/sand.png')} />
                    <Text style={styles.txt}>Logan Plastics</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.right}>
                    <TouchableOpacity>
                    <Image source={require('../assets/vegetable.png')} />
                    <Text style={styles.txt}>Jaggu Groceries</Text>
                    </TouchableOpacity>
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
        color: '#E53E31',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 6,
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
        margin: 14,
        borderWidth: 2,
        borderColor: '#EA6B33',
    },
    right:{
        flex:1,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 14,
        borderWidth: 2,
        borderColor: '#EA6B33',
    },
    img:{
        borderWidth: 2,
    }

});
