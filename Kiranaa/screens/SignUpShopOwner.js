import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as firebase from 'firebase'

export default class SignUpCustomer extends React.Component {

    state = {
        email: "",
        password: "",
        username:"",
        phone: "",
        Address: "",
        ciD: "",
    }

    storeData() {
        const db = firebase.firestore();
        const customer = db.collection("customer").doc().set({
            email: this.state.email,
            username: this.state.username,
            phone: this.state.phone,
            Address: this.state.Address,
            cID: this.state.cID,

        })
            .then(function () {
                console.log("Document successfully written!");

            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }

    display() {
        Alert.alert(
            "Account successfully created",
            "Your Customer Id is " + this.state.cID,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    }

    userSignup(email, pass) {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(() => {
                this.setState({ cID: this.state.username[0].concat(this.state.username[1], this.state.phone[0], Math.floor((Math.random() * 10)), Math.floor((Math.random() * 10))) }),
                    this.storeData(),
                    this.display(),
                    this.props.navigation.replace('Drawer1')


            })
            .catch(error => {
                Alert.alert(error.message)
            })

    }

    render() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.upper}>

                    <KeyboardAvoidingView>
                        <Text style={styles.main}>Username:</Text>
                        <TextInput
                            placeholder="Username"
                            placeholderTextColor='#808080'
                            style={styles.textInput}
                            value={this.state.username}
                            onChangeText={(username) => this.setState({ username })}
                        />
                        <Text style={styles.main}>E mail:</Text>
                        <TextInput
                            placeholder="E mail"
                            placeholderTextColor='#808080'
                            keyboardType='email-address'
                            style={styles.textInput}
                            style={styles.textInput}
                            value={this.state.email}
                            onChangeText={(email) => this.setState({ email})}
                        />
                        <Text style={styles.main}>Phone Number:</Text>
                        <TextInput
                            placeholder="Phone number"
                            placeholderTextColor='#808080'
                            keyboardType='number-pad'
                            style={styles.textInput}
                            value={this.state.phone}
                            onChangeText={(phone) => this.setState({ phone })}
                        />
                        <Text style={styles.main}>Password:</Text>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor='#808080'
                            secureTextEntry={true}
                            style={styles.textInput}
                            value={this.state.password}
                            onChangeText={(text) => this.setState({ password: text })}
                        />
                        <Text style={styles.main}>Address:</Text>
                        <TextInput
                            placeholder="House Address"
                            placeholderTextColor='#808080'
                            multiline
                            style={styles.textInput2}
                            value={this.state.Address}
                            onChangeText={(Address) => this.setState({ Address })}
                        />
                    </KeyboardAvoidingView>

                    <TouchableOpacity style={styles.button} onPress={() => { this.userSignup(this.state.email, this.state.password); }}>
                            <Text style={styles.signUp}>Sign Up</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ddd',
    },
    upper: {
        paddingTop: 10,
        flex: 3,
        paddingBottom: 20,
        // backgroundColor: '#c9b5aa',
    },
    head: {
        alignSelf: 'center',
        fontSize: 24,
        color: 'teal',
        fontFamily: 'Patua',
    },
    textInput: {
        marginTop: 10,
        color: 'teal',
        height: 40,
        fontSize: 20,
        fontFamily: 'Patua',
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 8,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#777',
    },
    textInput2: {
        marginTop: 10,
        color: 'teal',
        height: 70,
        fontSize: 20,
        fontFamily: 'Patua',
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 8,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#777',
    },
    main: {
        marginTop: 5,
        alignSelf: 'flex-start',
        marginLeft: 30,
        fontSize: 20,
        fontFamily: 'Patua',
    },
    button: {
        borderWidth: 2,
        borderColor: '#4A923B',
        paddingTop: 13,
        paddingBottom: 13,
        paddingRight: 40,
        paddingLeft: 40,
        marginTop: 25,
        marginBottom: 20,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: '#4A923B'
    },
    signUp: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Patua',
    },
})
