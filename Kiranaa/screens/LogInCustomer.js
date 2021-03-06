import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from "react-native";
import * as firebase from 'firebase'
import { ScrollView } from "react-native-gesture-handler";


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
        <KeyboardAvoidingView
        style={{flex:1}} behavior='height'
        >
        <View style={styles.container}>
            <View style={styles.upper}>
                <Text style={styles.main}>Username:</Text>
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

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.replace('Drawer1')} >
                    <Text style={styles.signUp}>Log In</Text>
                </TouchableOpacity>


            </View>

            <View style={styles.lower}>
                <Text style={styles.promt}>Dont have an account?</Text>
                <View>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.replace('SignUpCustomer')} >
                        <Text style={styles.signUp}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
        </KeyboardAvoidingView>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'space-around'
    },
    upper: {
        paddingTop: 5,
        flex: 3,
        backgroundColor: '#ddd',
    },
    lower: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#ddd'
    },
    textInput: {
        marginTop: 20,
        color: 'teal',
        height: 40,
        fontFamily: 'Patua',
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
        fontFamily: 'Patua',
    },
    promt: {
        alignSelf: 'center',
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
