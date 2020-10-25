import React from 'react';
import { StyleSheet, Text, View, Scroll, ScrollView, TextInput, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



export default function AddProduct({ navigation }) {


    return (
        <View style={styles.container}>

            <View style={styles.inContainer}>
                <Text style={{ fontSize: 18 }}>Search product from our database</Text>
                <TextInput
                    placeholder="product name"
                    style={{ marginTop: "2%", height: 40, borderColor: 'gray', borderWidth: 1, }}
                />
                <View style={{ marginTop: "5%", alignItems: 'center', justifyContent: 'center', }}>
                    <Button
                        title="Search"
                    />
                </View>
                <Text style={{ marginTop: "5%", fontSize: 18, alignSelf: 'center' }}>Or</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('RegisterProduct')}>
                    <View style={{ marginTop: "5%", width: "70%", alignSelf: 'center' }}>
                        <Button
                            title="Register a new product"
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: "5%"

    },
    inContainer: {

        height: "100%",
        marginTop: "5%",
        width: "90%",
        backgroundColor: 'white',
        borderRadius: 10
    },

});
