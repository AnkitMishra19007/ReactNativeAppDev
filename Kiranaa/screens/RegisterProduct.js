import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";



export default function SellerHome() {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.inputs}>
                    <Text style={styles.texts}>Name of the product </Text>
                    <TextInput

                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    />
                    <Text style={styles.texts}>MRP(INR)</Text>
                    <TextInput
                        keyboardType={"number-pad"}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    />
                    <Text style={styles.texts}>Selling Price(INR)</Text>
                    <TextInput
                        keyboardType={"number-pad"}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    />
                    <Text style={styles.texts}>Expiry Date(ddmmyy)</Text>
                    <TextInput
                        keyboardType={"number-pad"}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    />
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flexDirection: "column", marginRight: "5%" }}>
                            <Text style={styles.texts}>Quantity</Text>
                            <TextInput
                                keyboardType={"number-pad"}
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={styles.texts}>Unit</Text>
                            <TextInput
                                style={{ height: 40, width: 50, borderColor: 'gray', borderWidth: 1 }}
                            />

                        </View>
                    </View>
                </View>
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    inputs: {
        marginHorizontal: "5%",
        marginVertical: "5%",


    },
    texts: {
        fontSize: 20
    }

});
