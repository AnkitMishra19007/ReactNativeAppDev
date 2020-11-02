import React from 'react';
import { StyleSheet, Text, View, Scroll, ScrollView, TextInput, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



export default function MyStocks({ navigation }) {


    return (
        <View style={styles.container}>
            <Text>WE WILL DISPLAY UR STOCKS</Text>
        </View>
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
