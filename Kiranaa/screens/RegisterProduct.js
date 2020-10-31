import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import * as firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


export default class SellerHome extends React.Component {
    state = {
        name: "",
        brand: "",
        MRP: "",
        SP: "",
        expDate: "",
        quantity: "",
        unit: "",
        sID: "",
        productID: "",
        productImage: "",
    }
    register() {

        const db = firebase.firestore();
        const Product = db.collection("Product").doc().set({
            name: this.state.name,
            brand: this.state.brand,
            MRP: this.state.MRP,
            SP: this.state.SP,
            expDate: this.state.expDate,
            quantity: this.state.quantity,
            unit: this.state.unit,
            sID: this.state.sID,
            productID: this.state.name[0].concat(this.state.name[1], this.state.name[2], Math.floor((Math.random() * 10)), Math.floor((Math.random() * 10))),
            productImage: this.state.productImage,
        })

            .then(function () {
                console.log("Document successfully written!");
                Alert.alert("Product successfully added.");

            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }
    // registerStatus() {
    //     Alert.alert(
    //         "Product successfully registered.",
    //         [
    //             { text: "OK", onPress: () => console.log("OK Pressed") },
    //         ],
    //         { cancelable: false }
    //     );
    // }
    chooseCamera = async () => {

        const { granted } = await Permissions.askAsync(Permissions.CAMERA)
        if (granted) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5
            })
            if (!result.cancelled) {
                this.uploadImage(result.uri, "test")
                    .then(() => {

                        Alert.alert("Image uploaded.");
                    })
                    .catch((error) => {
                        Alert.alert('Error: ', error.message);
                    });
            }
        }

    }
    chooseGallery = async () => {

        const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (granted) {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5
            })
            if (!result.cancelled) {
                this.uploadImage(result.uri, "test")
                    .then(() => {
                        Alert.alert("Image uploaded.");
                    })
                    .catch((error) => {
                        Alert.alert('Error: ', error.message);
                    });
            }
        }
    }
    uploadImage = async (uri, imageFileName) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        var ref = firebase.storage().ref().child("productImages/" + Date().toLocaleString().replace(/\s/g, ""));
        ref.put(blob).then(function (result) {
            ref.getDownloadURL().then(function (result) {
                //this.setState({ productImage: "result " })
            });

            // this.setState({ productImage: await ref.getDownloadURL() })
        });



    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.inputs}>
                        <Text style={styles.texts}>Name of the product </Text>
                        <TextInput
                            placeholder="Name"
                            style={{ height: 40, borderRadius: 10, borderColor: '#008399', borderWidth: 1, marginTop: 5, fontSize: 17, padding: 5, color: '#008399' }}
                            value={this.state.name}
                            onChangeText={(name) => this.setState({ name })}
                        />
                        <Text style={styles.texts}>Brand</Text>
                        <TextInput
                            placeholder="Brand name"
                            style={{ height: 40, borderRadius: 10, borderColor: '#008399', borderWidth: 1, marginTop: 5, fontSize: 17, padding: 5, color: '#008399' }}
                            value={this.state.brand}
                            onChangeText={(brand) => this.setState({ brand })}
                        />
                        <Text style={styles.texts}>MRP(INR)</Text>
                        <TextInput
                            placeholder="MRP"
                            keyboardType={"number-pad"}
                            style={{ height: 40, borderRadius: 10, borderColor: '#008399', borderWidth: 1, marginTop: 5, fontSize: 17, padding: 5, color: '#008399' }}
                            value={this.state.MRP}
                            onChangeText={(MRP) => this.setState({ MRP })}
                        />
                        <Text style={styles.texts}>Selling Price(INR)</Text>
                        <TextInput
                            placeholder="Selling Price"
                            keyboardType={"number-pad"}
                            style={{ height: 40, borderRadius: 10, borderColor: '#008399', borderWidth: 1, marginTop: 5, fontSize: 17, padding: 5, color: '#008399' }}
                            value={this.state.SP}
                            onChangeText={(SP) => this.setState({ SP })}
                        />
                        <Text style={styles.texts}>Expiry Date(ddmmyy)</Text>
                        <TextInput
                            placeholder="Date of Expiry"
                            keyboardType={"number-pad"}
                            style={{ height: 40, borderRadius: 10, borderColor: '#008399', borderWidth: 1, marginTop: 5, fontSize: 17, padding: 5, color: '#008399' }}
                            value={this.state.expDate}
                            onChangeText={(expDate) => this.setState({ expDate })}
                        />
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "column", marginRight: "5%" }}>
                                <Text style={styles.texts}>Quantity</Text>
                                <TextInput
                                    placeholder="Quantity"
                                    keyboardType={"number-pad"}
                                    style={{ height: 40, borderRadius: 10, borderColor: '#008399', borderWidth: 1, marginTop: 5, fontSize: 17, padding: 5, color: '#008399' }}
                                    value={this.state.quantity}
                                    onChangeText={(quantity) => this.setState({ quantity })}
                                />
                            </View>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={styles.texts}>Unit</Text>
                                <TextInput
                                    placeholder="g/Kg/Pcs"
                                    style={{ height: 40, borderRadius: 10, borderColor: '#008399', borderWidth: 1, marginTop: 5, fontSize: 17, padding: 5, color: '#008399' }}
                                    value={this.state.unit}
                                    onChangeText={(unit) => this.setState({ unit })}
                                />

                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.texts}>Add Image</Text>
                            <TouchableOpacity onPress={() => { this.chooseCamera() }} style={styles.cam}>
                            <Image
                                style={{ width: 30, height: 30,}}
                                source={require("../assets/icons/camera.png")}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.chooseGallery() }} style={styles.cam}>
                            <Image
                                style={{ width: 30, height: 30,}}
                                source={require("../assets/icons/upload.png")}/>
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity onPress={() => { this.register() }} style={styles.button}><Text style={styles.txt}>Done</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
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
    button: {
        borderWidth: 2,
        borderColor: '#318290',
        padding: 16,
        marginTop: 25,
        marginBottom: 20,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: '#9BE3FF'
    },
    button2: {
        borderWidth: 2,
        borderColor: '#318290',
        padding: 16,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 10,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: '#9BE3FF'
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#383A3E'
    },
    txt2: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#383A3E'
    },
    cam:{
        marginLeft: 35,
        marginTop: 10,
        borderWidth: 2,
        padding: 2,
    }

});
