import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import * as firebase from 'firebase';
import { firebaseConfig } from './config'

export default class Loading extends React.Component {
    static navigationOptions = {
        header: null
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate("SellerHome")
            }
            else {
                this.props.navigation.navigate("LogInShopOwner")
            }
        })
    }
    render() {
        return (
            <View style={StyleSheet.container}>
                <ActivityIndicator></ActivityIndicator>
            </View>
        )
    }
}

