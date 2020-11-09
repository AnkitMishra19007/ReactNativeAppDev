import React from 'react';
import { StyleSheet, Button, Image, Text, View, Alert, FlatList, TouchableOpacity, State, ScrollView } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { color } from 'react-native-reanimated';

export default class ProductsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Sname: this.props.navigation.getParam('Sname'),
            sID: this.props.navigation.getParam('sID'),
            productsDetails: [],
        };
    }
    componentDidMount() {
        const db = firebase.firestore();
        db.collection("Product").where("sID", "==", this.state.sID)
            .get()
            .then(querySnapshot => {
                //console.log(querySnapshot.size);
                const data = querySnapshot.docs.map(doc => doc.data());
                //console.log(data);
                this.setState({ productsDetails: data });
            });
    }
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.Sname}>{this.state.Sname}</Text>
                <ScrollView >
                    <View style={styles.productsList}>
                        {this.state.productsDetails.map((y) => {
                            return (<View style={styles.productDetailCard}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('', y)} >

                                    <Image style={styles.cardImage} source={{ uri: y.productImage }} />
                                    <Text style={styles.productName}>{y.name}</Text>
                                    <Text style={styles.productBrand}>by {y.brand}</Text>
                                    <Text style={styles.productMRP}>₹{y.MRP}</Text>
                                </TouchableOpacity>
                            </View>);
                        })
                        }
                    </View>
                </ScrollView>
            </View>
        );

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3D3D3",
        alignItems: 'center',
    },
    Sname: {

    },

    productsList: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 10,
        justifyContent: 'space-evenly',

    },
    productDetailCard: {
        alignItems: 'center',
        flexBasis: '49.8%',
        backgroundColor: "#fff",
        height: 350,


    },
    cardImageView: {
        marginTop: 30,
        height: 400,
        width: 150
    },
    cardImage: {
        marginTop: 30,
        resizeMode: "contain",
        height: 150,
        width: 150

    },
    productName: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
    productBrand: {
        fontSize: 16,
        color: '#909497'
    },
    productMRP: {
        marginTop: 10,
        fontSize: 20,
        color: '#C0392B',
        fontWeight: "bold",
        fontSize: 24,
    },

});
