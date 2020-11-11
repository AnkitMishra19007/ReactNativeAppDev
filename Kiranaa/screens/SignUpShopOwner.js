import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as firebase from 'firebase'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import DropDownPicker from 'react-native-dropdown-picker';

export default class SignUpShopOwner extends React.Component {

    state = {
        email: "",
        password: "",
        Sname: "",
        SOname: "",
        Email: "",
        Pno: "",
        Address: "",
        sID: "",
        SCategory: "",

    }
    storeData() {
        const db = firebase.firestore();
        const users_SO = db.collection("users_SO").doc().set({
            Sname: this.state.Sname,
            SOname: this.state.SOname,
            Email: this.state.email,
            Pno: this.state.Pno,
            Address: this.state.Address,
            sID: this.state.sID,
            SCategory: this.state.SCategory,

        })
            .then(function () {
                console.log("Document successfully written!");

            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }


    displayShopID() {
        Alert.alert(
            "Account successfully created",
            "Shop Id is " + this.state.sID,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    }

    userSignup(email, pass) {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(() => {
                this.setState({ sID: this.state.Sname[0].concat(this.state.SOname[0], this.state.Pno[0], this.state.Pno[1], Math.floor((Math.random() * 10))) }),
                    this.storeData(),
                    this.displayShopID(),
                    this.props.navigation.replace('Drawer')


            })
            .catch(error => {
                Alert.alert(error.message)
            })

    }
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


        });



    }
    render() {
        return (
            <View style={styles.container} >
                <ScrollView>
                    <View style={styles.upper}>
                        <KeyboardAvoidingView>
                            <Text style={styles.main}>Shop name:</Text>
                            <TextInput
                                placeholder="Shop name"
                                placeholderTextColor='#808080'
                                style={styles.textInput}
                                value={this.state.Sname}
                                onChangeText={(Sname) => this.setState({ Sname })}
                            />
                            <Text style={styles.main}>Shop Owner name:</Text>
                            <TextInput
                                placeholder="Shop's Owner"
                                placeholderTextColor='#808080'
                                style={styles.textInput}
                                value={this.state.SOname}
                                onChangeText={(SOname) => this.setState({ SOname })}
                            />
                            <Text style={styles.main}>Shop Category:</Text>
                            <DropDownPicker
                                style={styles.drop}
                                items={[
                                    { label: 'General', value: 'General' },
                                    { label: 'Groceries', value: 'Groceries' },
                                    { label: 'Plastics', value: 'Plastics' },
                                    { label: 'Stationary', value: 'Stationary' },
                                ]}
                                placeholder="Shop Category"
                                onChangeItem={item => this.setState({
                                    SCategory: item.value
                                })}
                            />
                            <Text style={styles.main}>E mail:</Text>
                            <TextInput
                                placeholder="E mail"
                                placeholderTextColor='#808080'
                                keyboardType='email-address'
                                style={styles.textInput}
                                value={this.state.email}
                                onChangeText={(email) => this.setState({ email })}
                            />
                            <Text style={styles.main}>Phone Number:</Text>
                            <TextInput
                                placeholder="phone number"
                                placeholderTextColor='#808080'
                                keyboardType='number-pad'
                                style={styles.textInput}
                                value={this.state.Pno}
                                onChangeText={(Pno) => this.setState({ Pno })}

                            />
                            <Text style={styles.main}>Password:</Text>
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor='#808080'
                                secureTextEntry={true}
                                style={styles.textInput}
                                value={this.state.password}
                                onChangeText={(text) => this.setState({ password: text })}
                            />

                            <Text style={styles.main}>Shop Address:</Text>
                            <TextInput
                                placeholder="Shop Address"
                                placeholderTextColor='#808080'
                                multiline
                                style={styles.textInput2}
                                value={this.state.Address}
                                onChangeText={(Address) => this.setState({ Address })}
                            />
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={styles.main}>Shop photo:</Text>
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
                        </KeyboardAvoidingView>
                        <TouchableOpacity style={styles.button} onPress={() => { this.userSignup(this.state.email, this.state.password); }}>
                            <Text style={styles.signUp}>Sign Up</Text>
                        </TouchableOpacity>


                    </View>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    upper: {
        paddingTop: 4,
        flex: 3,
        paddingBottom: 20,
        backgroundColor: '#ddd',
    },
    textInput: {
        marginTop: 10,
        color: 'teal',
        fontFamily: 'Patua',
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
        fontFamily: 'Patua',
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
    cam: {
        marginLeft: 35,
        marginTop: 10,
        borderWidth: 2,
        padding: 2,
    },
    drop: {
        backgroundColor: '#ddd',
        paddingLeft: 8,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#777',
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        height: 38,
        color: 'teal',
        fontFamily: 'Patua',

    }
})
