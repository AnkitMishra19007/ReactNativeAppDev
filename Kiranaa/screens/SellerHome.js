import React from 'react';
import { StyleSheet, Button, Image, Text, View, Alert } from 'react-native';



export default function SellerHome() {


    return (

        <View style={styles.container}>

            <View style={styles.newOrders}>
                <Text style={styles.alertText}>NEW ORDERS</Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.numOrders}>N</Text>
                    <View style={{ width: "30%" }}>
                        <Button
                            title="View"
                            color='orange'

                        />
                    </View>
                </View>
            </View>

            <View style={styles.row2}>
                <View style={styles.info1}>
                    <Text style={{ color: 'grey', fontSize: 15, }}>
                        Stock alerts
                    </Text>
                    <Image
                        style={{

                            resizeMode: "contain",
                            height: "70%",
                            width: "40%"
                        }}

                        source={require('../assets/icons/alert.png')}

                    />
                </View>
                <View style={styles.info2}>
                    <Text style={{ color: 'grey', fontSize: 15, }}>
                        Add new product
                    </Text>
                    <Image
                        style={{

                            resizeMode: "contain",
                            height: "70%",
                            width: "40%"
                        }}
                        source={require('../assets/icons/add.png')}
                    />
                </View>
            </View>


        </View >

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
        fontSize: 18
    },
    numOrders: {
        color: 'black',
        fontSize: 26
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
