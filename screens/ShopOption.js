import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function ShopOption({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <View style={styles.topleft}>
                    <View style={styles.img}>
                        <Image source={require('../assets/stationary.png')} />
                    </View>
                    <View style={styles.txt}>
                        <Text style={styles.textstyle}>Stationary</Text>
                    </View>
                </View>
                <View style={styles.topright}>
                    <View style={styles.img}>
                        <Image source={require('../assets/supermarket.png')} />
                    </View>
                    <View style={styles.txt}>
                        <Text style={styles.textstyle}>General Items</Text>
                    </View>
                </View>
            </View>

            <View style={styles.lower}>
                <View style={styles.topleft}>
                    <View style={styles.img}>
                        <Image source={require('../assets/sand.png')} />
                    </View>
                    <View style={styles.txt}>
                        <Text style={styles.textstyle}>Plastics Ware</Text>
                    </View>
                </View>
                <View style={styles.topright}>
                    <View style={styles.img}>
                        <Image source={require('../assets/vegetable.png')} />
                    </View>
                    <View style={styles.txt}>
                        <Text style={styles.textstyle}>Groceries</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:  1,
        padding: 3,
        backgroundColor: '#c9b5aa',
        flexDirection: 'column',
    },
    upper:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    lower:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    topleft:{
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    topright:{
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    img:{
        padding:6,
        borderRadius: 20,
        backgroundColor: '#134',
    },
    txt:{
        padding: 5,
    },
    textstyle:{
        color: 'teal',
        fontSize: 20,
        fontWeight: 'bold',
    }
})
