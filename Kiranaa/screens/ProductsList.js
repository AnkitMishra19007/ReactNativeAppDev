import React from 'react';
import { StyleSheet, Button, Image, Text, View, ActivityIndicator, FlatList, TouchableOpacity, State, ScrollView } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { color } from 'react-native-reanimated';
import mainService from './mainService';

export default class ProductsList extends React.Component {
    state={
        loaded: false,
    }
    constructor(props) {
        super(props);
        this.state = {
            Sname: this.props.navigation.getParam('Sname'),
            sID: this.props.navigation.getParam('sID'),
            productsDetails: [],
        };
        mainService.load(v => this.setState({loaded: true}));
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
        if(!this.state.loaded){
            return(
                <View style={{flex: 1,justifyContent: 'center'}}>
                <ActivityIndicator size="large" color="indianred" />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <Text style={styles.Sname}>{this.state.Sname}</Text>
                <ScrollView >
                    <View style={styles.productsList}>
                        {this.state.productsDetails.map((y) => {
                            return (
                                <TouchableOpacity style={styles.every} onPress={() => this.props.navigation.navigate('ParticularProduct', y)} >
                                        <View style={styles.left}>
                                        <Image style={styles.cardImage} source={{ uri: y.productImage }} />
                                        </View>
                                        <View style={styles.middle}>
                                        <Text style={styles.productName}>{y.name}</Text>
                                        <Text style={styles.productBrand}>{y.brand}</Text>
                                        </View>
                                        <View style={styles.right}>
                                        <Text style={styles.productMRP}>₹{y.MRP}</Text>
                                        </View>
                                </TouchableOpacity>
                             
                            );
                        }
                        )
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
    },
    Sname: {
        alignSelf: 'center'
    },

    productsList: {
        flex: 1,
        marginHorizontal: 5,
        marginVertical: 10,
    },
    every:{
        flex:1,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#caa',
        backgroundColor: '#ffe',
        borderRadius: 20,
    },
    cardImage: {
        height: 100,
        width: 100,
        borderRadius: 20,
        borderColor: '#caa',
        borderWidth: 1,
    },
    left:{
        flex: 1,
        margin: 5,
    },
    middle:{
        flex: 1.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',  
    },
    right:{
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',  
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
        marginTop: 10,
        fontSize: 20,
        color: '#C0392B',
        fontFamily: 'Patua',
        fontSize: 24,
    },

});
