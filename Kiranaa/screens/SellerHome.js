import { processFontFamily } from 'expo-font';
import React from 'react';
import { StyleSheet, Button, Image, Text, View, TouchableWithoutFeedback, } from 'react-native';
import { } from 'react-native-gesture-handler';



export default function SellerHome({ navigation }) {


    return (

        <View style={styles.container}>

            <View style={styles.newOrders}>
                <Text style={styles.alertText}>NEW ORDERS</Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.numOrders}>N</Text>
                    <View style={{ width: "30%" }}>
                        <Button
                            title="View"
                            color='blue'

                        />
                    </View>
                </View>
            </View>

            <View style={styles.newOrders}>
                <Text style={styles.alertText}>DELIVERED ORDERS</Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.numOrders}>M</Text>
                    <View style={{ width: "30%" }}>
                        <Button
                            title="View"
                            color='blue'

                        />
                    </View>
                </View>
            </View>

            


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3D3D3",
        alignItems: 'center',
    },
    newOrders: {
        height: "15%",
        width: "90%",
        marginTop: "10%",
        justifyContent: 'center',
        paddingLeft: "5%",
        paddingRight: "5%",
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    alertText: {
        color: 'grey',
        fontSize: 18,
        fontFamily: 'Patua',
    },
    numOrders: {
        color: 'black',
        fontSize: 26,
        fontFamily: 'Patua',
    },

    row2: {
        flexDirection: 'row',
        marginTop: "10%",
        marginLeft: "5%",
        marginRight: "5%",
        height: '20%',
        width: '90%',
        borderRadius: 10,
    },
    info1: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '50%',
        backgroundColor: "#fff",
        borderRightWidth: 1,
        borderRightColor: 'grey',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    info2: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '50%',
        backgroundColor: "#fff",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

});
