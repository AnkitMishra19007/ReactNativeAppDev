import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AboutUs() {

    return (
        <View style={styles.container}>
            <View style={styles.About}>
                <Text style={styles.normal}>
                    <Text style={styles.special}>KI₹ANAA</Text> is developed as a project
                 for Software Engineering course. This app is practical as it helps to order daily need products quickly from nearby stores.
                We have tried to keep the app as user friendly as we could.{'\n'}To give your feedback or report any issue please
                go to Contact Us page. Thankyou
                {'\n'}------------Developers-----------{'\n'}
                    <Text style={styles.color}>Utkarsh Anand{'\n'}
                Ankit Mishra{'\n'}
                Nitish Kumar{'\n'}
                Abhishek Ranjan{'\n'}
                Swapnil Deb{'\n'}
                Pavitra Jain</Text>


                </Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        backgroundColor: '#ddd',
    },
    About: {
        flexDirection: 'row',
        marginBottom: 30,
        padding: 5,
        borderWidth: 2,
        borderColor: '#965733',

    },
    special: {
        fontSize: 25,
        color: '#965733',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    normal: {
        fontSize: 20,
        color: 'teal',
        fontWeight: 'bold',
    },
    color: {
        color: '#965733',
    }
});
