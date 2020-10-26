import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";



export default function SellerHome() {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.inputs}>
                    <Text style={styles.texts}>Name of the product </Text>
                    <TextInput
                        placeholder="Name"
                        style={{ height: 40, borderRadius:10 ,borderColor: '#008399', borderWidth: 1, marginTop: 5, fontSize: 17, padding: 5, color:'#008399'}}
                    />
                    <Text style={styles.texts}>Brand</Text>
                    <TextInput
                        placeholder="Brand name"
                        style={{ height: 40,borderRadius:10 , borderColor: '#008399', borderWidth: 1, marginTop: 5, fontSize: 17, padding: 5, color:'#008399'}}
                    />
                    <Text style={styles.texts}>MRP(INR)</Text>
                    <TextInput
                        placeholder="MRP"
                        keyboardType={"number-pad"}
                        style={{ height: 40,borderRadius:10 , borderColor: '#008399', borderWidth: 1, marginTop: 5, fontSize: 17, padding: 5, color:'#008399'}}
                    />
                    <Text style={styles.texts}>Selling Price(INR)</Text>
                    <TextInput
                        placeholder="Selling Price"
                        keyboardType={"number-pad"}
                        style={{ height: 40, borderRadius:10 ,borderColor: '#008399', borderWidth: 1,marginTop: 5, fontSize: 17, padding: 5, color:'#008399'}}
                    />
                    <Text style={styles.texts}>Expiry Date(ddmmyy)</Text>
                    <TextInput
                        placeholder="Date of Expiry"
                        keyboardType={"number-pad"}
                        style={{ height: 40,borderRadius:10 , borderColor: '#008399', borderWidth: 1,marginTop: 5,fontSize: 17, padding: 5, color:'#008399'}}
                    />
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flexDirection: "column", marginRight: "5%" }}>
                            <Text style={styles.texts}>Quantity</Text>
                            <TextInput
                                placeholder="Quantity"
                                keyboardType={"number-pad"}
                                style={{ height: 40,borderRadius:10 , borderColor: '#008399', borderWidth: 1,marginTop: 5, fontSize: 17, padding: 5, color:'#008399'}}
                            />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={styles.texts}>Unit</Text>
                            <TextInput
                                placeholder="g/Kg/Pcs"
                                style={{ height: 40, borderRadius:10 ,borderColor: '#008399', borderWidth: 1,marginTop: 5,fontSize: 17, padding: 5, color:'#008399'}}
                            />

                        </View>
                    </View>
                    <TouchableOpacity style={styles.button}><Text style={styles.txt}>Add Now</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        
    },
    inputs: {
        marginHorizontal: "5%",
        marginTop: 1,


    },
    texts: {
        fontSize: 20,
        marginTop: 8,
        fontWeight: 'bold',
    },
    button:{
        borderWidth: 2,
        borderColor: '#318290',
        padding: 16,
        marginTop: 25,
        marginBottom: 20,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: '#9BE3FF'
    },
    txt:{
        fontWeight:'bold',
        fontSize: 20,
        color: '#383A3E'
    }

});
