import React from 'react';
import { StyleSheet, Button, Image, Text, View, Alert, FlatList, TouchableOpacity, State, ScrollView } from 'react-native';
//import { ScrollView } from "react-native-gesture-handler";
import * as firebase from 'firebase';
import 'firebase/firestore';



export default class ParticularProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            MRP: this.props.navigation.getParam('MRP'),
            SP: this.props.navigation.getParam('SP'),
            brand: this.props.navigation.getParam('brand'),
            expDate: this.props.navigation.getParam('brand'),
            name: this.props.navigation.getParam('name'),
            productDescription: this.props.navigation.getParam('productDescription'),
            productID: this.props.navigation.getParam('productID'),
            productImage: this.props.navigation.getParam('productImage'),
            quantity: this.props.navigation.getParam('quantity'),
            sID: this.props.navigation.getParam('sID'),
            unit: this.props.navigation.getParam('unit'),


        };
    }

    render() {
        console.log(this.state.productImage);
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.Container}>
                        <Image style={styles.productImage} source={{ uri: this.props.navigation.getParam('productImage') }} />
                        <Text style={styles.productName}>{this.state.name}</Text>
                        <Text style={styles.productBrand}>by {this.state.brand}</Text>
                        <Text style={styles.productMRP}>₹{this.state.MRP}</Text>
                        <View style={styles.buttons}>
                            <View style={styles.btn1}>
                                <Button

                                    title="ADD TO CART"
                                    color="#E44838"

                                />
                            </View>
                            <View style={styles.btn2}>
                                <Button

                                    title="BUY NOW"
                                    color="#E44838"

                                />
                            </View>
                        </View>
                        <View style={styles.line}>

                        </View>
                        <Text style={styles.productDetails}>Product Details</Text>
                        <Text style={styles.productDescription}>{this.state.productDescription}</Text>
                    </View >
                </ScrollView>

            </View >
        );

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',

    },
    Container: {
        marginTop: 10,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',

    },
    buttons: {
        marginVertical: 20,
        flexDirection: 'row',
    },
    btn1: {
        width: "40%",
        marginHorizontal: 20
    },
    btn2: {
        width: "40%",
        marginHorizontal: 20
    },
    productImage: {
        height: 200,
        width: 200

    },
    productName: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginTop: 10,
        fontSize: 24,
        fontWeight: "bold",
    },
    productBrand: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        fontSize: 18,
        color: '#909497'
    },
    productMRP: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginTop: 10,

        color: '#C0392B',
        fontWeight: "bold",
        fontSize: 37,

    },
    line: {
        height: 1,
        width: "100%",
        backgroundColor: "#ddd"
    },
    productDescription: {
        fontSize: 20,
        marginHorizontal: 10,
    },
});
