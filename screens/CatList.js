import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, } from 'react-native';



export default function CatList({ navigation }) {

    return (
        <View style={styles.container}>

            <View style={styles.iconView}>
                <TouchableOpacity onPress={() => navigation.navigate('BathScreen')}>
                    <Image
                        style={styles.icons}
                        source={require('../assets/bath.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CerealsScreen')}>
                    <Image
                        style={styles.icons}
                        source={require('../assets/cereal.png')}
                    />
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-around", }}>
                <Text style={styles.iconDescription}  >
                    Bath
                </Text>
                <Text style={styles.iconDescription} >
                    Cereals
                </Text>
            </View>
            <View style={styles.iconView}>
                <TouchableOpacity onPress={() => navigation.navigate('BathScreen')}>
                    <Image
                        style={styles.icons}
                        source={require('../assets/dairy.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CerealsScreen')}>
                    <Image
                        style={styles.icons}
                        source={require('../assets/beauty.png')}
                    />
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-around", }}>
                <Text style={styles.iconDescription}  >
                    Dairy
                </Text>
                <Text style={styles.iconDescription} >
                    Beauty
                </Text>
            </View>
            <View style={styles.iconView}>
                <TouchableOpacity onPress={() => navigation.navigate('BathScreen')}>
                    <Image
                        style={styles.icons}
                        source={require('../assets/snacks.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CerealsScreen')}>
                    <Image
                        style={styles.icons}
                        source={require('../assets/beverages.png')}
                    />
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-around", }}>
                <Text style={styles.iconDescription}  >
                    Snacks
                </Text>
                <Text style={styles.iconDescription} >
                    Beverages
                </Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-evenly"
    },
    iconView: {
        flexDirection: 'row', justifyContent: "space-around",
    },
    icons: {
        width: 135,
        height: 135,
    },
    iconDescription: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
