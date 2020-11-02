import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from "react-native";
import * as firebase from 'firebase'


export default class LogInCustomer extends React.Component {
    state = {
        email: "",
        password: ""
    }
    userSignin(email, pass) {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(() => {
                this.props.navigation.replace('Drawer1')
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    render() {

    return (
        <View style={styles.container}>

            <View style={styles.upper}>
                {/* <Text style={styles.head}>LOG IN Customer</Text> */}
                <Text style={styles.main}>Username:</Text>
                <KeyboardAvoidingView>
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor='#808080'
                        underlineColorAndroid={'transparent'}
                        style={styles.textInput}
                    />
                    <Text style={styles.main}>Password:</Text>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor='#808080'

                        secureTextEntry={true}
                        style={styles.textInput}
                    />
                </KeyboardAvoidingView>

                <TouchableOpacity style={styles.feed2} onPress={() => this.props.navigation.replace('Drawer1')} >
                    <Text style={styles.signUp}>Log In</Text>
                </TouchableOpacity>


            </View>

            <View style={styles.lower}>
                <Text style={styles.promt}>Dont have an account?</Text>
                <View>
                <TouchableOpacity style={styles.feed} onPress={() => this.props.navigation.replace('SignUpCustomer')} >
                        <Text style={styles.signUp}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    upper: {
        paddingTop: 5,
        flex: 3,
        backgroundColor: '#c9b5aa',
    },
    lower: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#c9b5aa'
    },
    head: {
        alignSelf: 'center',
        fontSize: 24,
        color: 'teal',
    },
    textInput: {
        marginTop: 20,
        color: 'teal',
        height: 40,
        fontSize: 20,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 8,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#777',
    },
    main: {
        marginTop: 10,
        alignSelf: 'flex-start',
        marginLeft: 30,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'teal',


    },
    promt: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'teal',
        fontStyle: 'italic',
    },
    feed: {
        marginTop: 12,
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: '#965733',
        borderWidth: 2,
        padding: 16,
    },
    feed2: {
        marginTop: 25,
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: '#965733',
        borderWidth: 2,
        padding: 16,
    },
    signUp: {
        fontSize: 20,
        color: 'teal',
        fontWeight: 'bold',
    },
})
