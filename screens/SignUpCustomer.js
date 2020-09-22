import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


export default function SignUpCustomer({ navigation }) {

    return (
        <View style={styles.container}>
            <ScrollView>
                    
                    <KeyboardAvoidingView>
                        <Text style={styles.main}>Username:</Text>
                        <TextInput
                            placeholder="Username"
                            placeholderTextColor='#808080'
                            style={styles.textInput}
                        />
                        <Text style={styles.main}>E mail:</Text>
                        <TextInput
                            placeholder="E mail"
                            placeholderTextColor='#808080'
                            keyboardType='email-address'
                            style={styles.textInput}
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
                        />
                        <Text style={styles.main}>Address:</Text>
                        <TextInput
                            placeholder="House Address"
                            placeholderTextColor='#808080'
                            multiline
                            style={styles.textInput2}
                        />
                    </KeyboardAvoidingView>

                    <TouchableOpacity style={styles.feed2} onPress={() => navigation.navigate('ShopOption')}>
                        <Text style={styles.signUp}>Sign Up</Text>
                    </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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
        marginTop: 15,
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
