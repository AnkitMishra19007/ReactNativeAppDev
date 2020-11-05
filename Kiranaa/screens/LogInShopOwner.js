import React from "react";
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView ,TouchableOpacity, ScrollView, Alert, Platform } from "react-native";
import * as firebase from 'firebase'



export default class LogInShopOwner extends React.Component {
    state = {
        email: "",
        password: ""
    }
    userSignin(email, pass) {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(() => {
                this.props.navigation.replace('Drawer')
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
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.upper}>
                    <Text style={styles.main}>Shop ID:</Text>
                        <TextInput
                            placeholder="ShopID"
                            placeholderTextColor='#808080'
                            style={styles.textInput}
                            onChangeText={(text) => this.setState({ email: text })}
                        />
                        <Text style={styles.main}>Password:</Text>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor='#808080'
                            secureTextEntry={true}
                            onChangeText={(text) => this.setState({ password: text })}
                            style={styles.textInput}
                        />
                    {/* onPress={() => this.userSignin(this.state.email, this.state.password)} */}
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.replace('Drawer')} >
                        <Text style={styles.signUp}>Log In</Text>
                    </TouchableOpacity>


                </View>
                <View style={styles.lower}>
                    <Text style={styles.promt}>Dont have an account?</Text>
                    <View style={styles.con3}>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.replace('SignUpShopOwner')} >
                            <Text style={styles.signUp}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </View>

           </View>
           </ScrollView>
           </KeyboardAvoidingView>
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
    },
    lower: {
        flex:1,
        alignContent: 'center',
        padding: 23,
        marginTop: 10,
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
        borderColor: '#72996A',
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
