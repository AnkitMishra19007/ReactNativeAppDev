import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function ContactUs() {


    return (
        <View style={styles.container}>
            <View style={styles.line1}>
                <Text style={styles.head}>Hello! Feel free to write us for any of the situations given below
                at respective e-mails. We will try to reply as soon as possible!</Text>
            </View>
            <View style={styles.line2}>
                <Text style={styles.feedl}>Feedback</Text>
                <Text style={styles.feedr}>feedback@ppmail.com</Text>
            </View>
            <View style={styles.line2}>
                <Text style={styles.feedl}>Complaint</Text>
                <Text style={styles.feedr}>complaint@kmail.com</Text>
            </View>
            <View style={styles.line2}>
                <Text style={styles.feedl}>Queries</Text>
                <Text style={styles.feedr}>queries@dmail.com</Text>
            </View>
            <View style={styles.line2}>
                <Text style={styles.feedl}>Business</Text>
                <Text style={styles.feedr}>talk@dmail.com</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        padding: 5,
        justifyContent: 'space-evenly',
    },
    line1: {
        borderWidth: 2,
        borderColor: 'teal',
        borderRadius: 20,
        margin: 2,
        padding: 2,
    },
    head: {
        color: 'teal',
        fontSize: 23,
        fontFamily: 'Patua',
    },
    line2: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    feedl: {
        fontFamily: 'Patua',
        fontSize: 22,
        marginTop: 3,
        color: 'teal',
        borderColor: 'teal',
        borderBottomWidth: 2,
        borderLeftWidth: 4,
        padding: 5,
        borderRadius: 30,
    },
    feedr: {
        padding: 5,
        fontSize: 19,
        fontFamily: 'Patua',
        color: '#965733',
        borderColor: 'teal',
        borderBottomWidth: 2,
        borderRightWidth: 4,
        borderRadius: 30,
    },
});
