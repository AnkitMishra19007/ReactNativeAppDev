import React from 'react';
import { StyleSheet, Image, Text, View, ActivityIndicator, TouchableOpacity, State, ScrollView } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import mainService from '../screens/mainService';

export default class Cart extends React.Component {
    state = {
        loaded: false,
    }
    constructor(props) {
        super(props);
        this.state = {

            cID: "12345",
            cartDetails: "",
            cartItemID: [],
            productsDetails: [],


        };
        mainService.load(v => this.setState({ loaded: true }));
    }
    componentDidMount() {
        const db = firebase.firestore();
        var docRef = db.collection("cart").doc(this.state.cID);

        docRef.get().then(doc => {
            if (doc.exists) {

                var temp = Object.keys(doc.data());

                this.setState({
                    cartItemID: temp
                }, () => {
                    for (let i = 0; i < this.state.cartItemID.length; i++) {
                        var itemID = this.state.cartItemID[i];
                        db.collection("Product").where("productID", "==", itemID)
                            .get()
                            .then(querySnapshot => {
                                //console.log(querySnapshot.size);
                                const data = querySnapshot.docs.map(doc => doc.data());
                                //console.log(data);
                                this.setState({ productsDetails: this.state.productsDetails.concat(data) });
                                //this.state.productsDetails(data)

                                // console.log("state set successful(2)")
                            });

                    }
                    console.log("-----------------productDetails-------------=", this.state.productsDetails)
                });

            } else {

            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });


    }
    render() {
        if (!this.state.loaded) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="indianred" />
                </View>
            );
        }

        return (

            <View style={styles.container}>

                <ScrollView >
                    <View style={styles.container}>
                        <View style={styles.productsList}>
                            {this.state.productsDetails.map((y) => {
                                return (<View>
                                    <TouchableOpacity style={styles.every}  >
                                        <View style={styles.left}>
                                            <Image style={styles.cardImage} source={{ uri: y.productImage }} />
                                        </View>
                                        <View style={styles.middle}>
                                            <Text style={styles.productName}>{y.name}</Text>
                                            <Text style={styles.productBrand}>by {y.brand}</Text>
                                            <Text style={styles.productMRP}>Price: ₹{y.MRP}</Text>
                                            <Text style={styles.productMRP}>Total: ₹{y.MRP * 2}</Text>

                                            <View style={styles.iconsRow}>
                                                <View>
                                                    <TouchableOpacity style={styles.deleteBtn}  >
                                                        <Image style={styles.btn} source={require('../assets/icons/delete.png')} />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <TouchableOpacity style={styles.TOarithmeticBtn}  >
                                                        <Image style={styles.incDec} source={require('../assets/icons/dec.png')} />
                                                    </TouchableOpacity>
                                                    <Text style={styles.quantity}>2</Text>
                                                    <TouchableOpacity style={styles.TOarithmeticBtn}  >
                                                        <Image style={styles.incDec} source={require('../assets/icons/inc.png')} />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={styles.line}>

                                    </View>
                                </View>
                                );

                            }
                            )
                            }
                        </View>
                        <View style={styles.priceDetails}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                <Text style={{ fontSize: 20 }}>Subtotal (3 items)</Text>
                                <Text style={{ fontSize: 20 }}>₹x</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginBottom: 5 }}>
                                <Text style={{ fontSize: 20 }}>Delivery Charges</Text>
                                <Text style={{ fontSize: 20 }}>₹x</Text>
                            </View>
                            <View style={styles.line}>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Total Amount</Text>
                                <Text style={{ fontSize: 20, fontWeight: "bold" }}>₹x</Text>
                            </View>

                        </View>
                        <View style={{
                            flexDirection: 'column',

                            backgroundColor: '#ddd',
                            flex: 1,



                        }}>
                            <TouchableOpacity style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: 1,
                                backgroundColor: "#6DF97E", paddingTop: 15,
                                paddingBottom: 15,
                            }}>
                                <Text style={{ fontSize: 18 }}>Proceed to Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View >
        );

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    iconsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5
    },
    productsList: {
        flex: 1,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    line: {
        height: 1,
        width: "100%",
        backgroundColor: "#ddd"
    },
    every: {
        flex: 1,
        flexDirection: 'row',

        backgroundColor: '#fff',

    },
    cardImage: {
        height: 130,
        width: 130,

    },
    incDec: {
        height: 25,
        width: 25
    },
    left: {
        flex: 1,
        margin: 5,
    },
    middle: {
        flex: 1.5,
        flexDirection: 'column',
    },

    productName: {
        marginTop: 10,
        fontSize: 25,
        fontFamily: 'Patua',
    },
    productBrand: {
        fontSize: 16,
        color: '#909497',
        fontFamily: 'Patua',
    },
    productMRP: {
        fontSize: 16,
        color: '#000',

    },
    deleteBtn: {
    },

    TOarithmeticBtn: {
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: "#ddd"
    },
    quantity: {
        fontSize: 20,
    },
    btn: {
        height: 25,
        width: 27
    },
    priceDetails: {
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 10
    },
});
