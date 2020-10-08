import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as firebase from 'firebase'


export default class SignUpShopOwner extends React.Component {

    state = {
        email: "",
        password: ""
    }

    userSignup(email, pass) {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(() => {
                this.props.navigation.replace('Drawer')
            })
            .catch(error => {
                Alert.alert(error.message)
            })

    }
    render() {
        return (
            <View style={styles.container} >
                <ScrollView>
                    <View style={styles.upper}>
                        {/* <Text style={styles.head}>Sign Up Shop Owner</Text> */}
                        <KeyboardAvoidingView>
                            <Text style={styles.main}>Shop name:</Text>
                            <TextInput
                                placeholder="Shop name"
                                placeholderTextColor='#808080'
                                style={styles.textInput}
                            />
                            <Text style={styles.main}>Shop Owner name:</Text>
                            <TextInput
                                placeholder="Shop's Owner"
                                placeholderTextColor='#808080'
                                style={styles.textInput}
                            />
                            <Text style={styles.main}>E mail:</Text>
                            <TextInput
                                placeholder="E mail"
                                placeholderTextColor='#808080'
                                keyboardType='email-address'
                                style={styles.textInput}
                                value={this.state.email}
                                onChangeText={(text) => this.setState({ email: text })}
                            />
                            <Text style={styles.main}>Phone Number:</Text>
                            <TextInput
                                placeholder="phone number"
                                placeholderTextColor='#808080'
                                keyboardType='number-pad'
                                style={styles.textInput}

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

                            <Text style={styles.main}>Shop Address:</Text>
                            <TextInput
                                placeholder="Shop Address"
                                placeholderTextColor='#808080'
                                multiline
                                style={styles.textInput2}
                            />
                        </KeyboardAvoidingView>

                        <TouchableOpacity style={styles.feed2} onPress={() => this.userSignup(this.state.email, this.state.password)}>
                            <Text style={styles.signUp}>Log In</Text>
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
    },
    upper: {
        paddingTop: 30,
        flex: 3,
        paddingBottom: 20,
        backgroundColor: '#c9b5aa',
    },
    head: {
        alignSelf: 'center',
        fontSize: 24,
        color: 'teal',
    },
    textInput: {
        marginTop: 10,
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
    textInput2: {
        marginTop: 10,
        color: 'teal',
        height: 70,
        fontSize: 20,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 8,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#777',
    },
    main: {
        marginTop: 25,
        alignSelf: 'flex-start',
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'teal',


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
