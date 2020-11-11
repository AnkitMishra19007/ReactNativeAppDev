import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import * as firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import DropDownPicker from 'react-native-dropdown-picker';

export default class RegisterProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            shopEmail: "",
            productDescription: "",
        };
    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log("email :", user.email);
                const db = firebase.firestore();
                db.collection("users_SO").where("Email", "==", user.email)
                    .get()
                    .then(function (querySnapshot) {
                        querySnapshot.forEach(function (doc) {
                            var data = doc.data()
                            console.log(data.sID);
                            this.setState({ shopEmail: data.sID })
                            console.log(this.state.shopEmail);
                        });
                    })

            } else {
                Alert.alert("Sign in first!");
            }
        });




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
            Email: this.state.shopEmail,
            productDescription: this.state.productDescription,
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
        ref.put(blob).then((result) => {
            ref.getDownloadURL().then((result) => {

                this.setState({ productImage: result })
                console.log(result)
                console.log(this.state.productImage)
                Alert.alert("Image uploaded.");
            });


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
                            style={styles.inp}
                            value={this.state.name}
                            onChangeText={(name) => this.setState({ name })}
                        />
                        <Text style={styles.texts}>Brand</Text>
                        <TextInput
                            placeholder="Brand name"
                            style={styles.inp}
                            value={this.state.brand}
                            onChangeText={(brand) => this.setState({ brand })}
                        />
                        <Text style={styles.texts}>MRP(INR)</Text>
                        <TextInput
                            placeholder="MRP"
                            keyboardType={"number-pad"}
                            style={styles.inp}
                            value={this.state.MRP}
                            onChangeText={(MRP) => this.setState({ MRP })}
                        />
                        <Text style={styles.texts}>Selling Price(INR)</Text>
                        <TextInput
                            placeholder="Selling Price"
                            keyboardType={"number-pad"}
                            style={styles.inp}
                            value={this.state.SP}
                            onChangeText={(SP) => this.setState({ SP })}
                        />
                        <Text style={styles.texts}>Expiry Date(ddmmyy)</Text>
                        <TextInput
                            placeholder="Date of Expiry"
                            keyboardType={"number-pad"}
                            style={styles.inp}
                            value={this.state.expDate}
                            onChangeText={(expDate) => this.setState({ expDate })}
                        />
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "column", marginRight: "5%", flex: 0.3 }}>
                                <Text style={styles.texts}>Quantity</Text>
                                <TextInput
                                    placeholder="Quantity"
                                    keyboardType={"number-pad"}
                                    style={styles.inp}
                                    value={this.state.quantity}
                                    onChangeText={(quantity) => this.setState({ quantity })}
                                />
                            </View>
                            <View style={{ flexDirection: "column", flex: 0.3 }}>
                                <Text style={styles.texts}>Unit</Text>
                                <DropDownPicker
                                    style={styles.drop}
                                    items={[
                                        { label: 'Pcs', value: 'Pcs' },
                                        { label: 'Kg', value: 'Kg' },
                                        { label: 'g', value: 'g' },
                                        { label: 'Ltr', value: 'Ltr' },
                                    ]}
                                    placeholder="Unit"
                                    onChangeItem={item => this.setState({
                                        unit: item.value
                                    })}
                                />
                            </View>
                        </View>
                        <Text style={styles.texts}>Product Description</Text>
                        <TextInput
                            placeholder="Product Description"

                            style={styles.inp}
                            value={this.state.productDescription}
                            onChangeText={(productDescription) => this.setState({ productDescription })}
                        />
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.texts}>Add Image</Text>
                            <TouchableOpacity onPress={() => { this.chooseCamera() }} style={styles.cam}>
                                <Image
                                    style={{ width: 30, height: 30, }}
                                    source={require("../assets/icons/camera.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.chooseGallery() }} style={styles.cam}>
                                <Image
                                    style={{ width: 30, height: 30, }}
                                    source={require("../assets/icons/upload.png")} />
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity onPress={() => { this.register() }} style={styles.button}><Text style={styles.txt}>Done</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.getCurrentUserDetails() }} style={styles.button}><Text style={styles.txt}>Done</Text></TouchableOpacity>
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
    inp: {
        height: 40,
        borderRadius: 10,
        borderColor: '#008399',
        borderWidth: 1,
        marginTop: 5,
        fontSize: 17,
        fontFamily: 'Patua',
        padding: 5,
        color: '#008399'
    },
    inputs: {
        marginHorizontal: "5%",
        marginTop: 1,
    },
    texts: {
        fontSize: 20,
        marginTop: 8,
        fontFamily: 'Patua',
    },
    button: {
        borderWidth: 2,
        borderColor: '#318290',
        paddingTop: 13,
        paddingBottom: 13,
        paddingRight: 40,
        paddingLeft: 40,
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
        fontFamily: 'Patua',
        fontSize: 20,
        color: '#383A3E'
    },
    txt2: {
        fontFamily: 'Patua',
        fontSize: 12,
        color: '#383A3E'
    },
    cam: {
        marginLeft: 35,
        marginTop: 10,
        borderWidth: 2,
        padding: 2,
    },
    drop: {
        borderColor: '#008399',
        marginTop: 6,
        height: 38,
    }

});