import React from 'react';
import { StyleSheet, Button, Image, Text, View, Alert, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
//<TouchableOpacity onPress={() => navigation.navigate('StationaryShopsCategory')}>
//<Image source={require('../assets/stationary.png')} /></TouchableOpacity>

export default class BuyerHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shopsDetails: [],
            nStationary: "",
            nGeneral: "",
            nPlastics: "",
            nGroceries: "",
        };
    }
    componentDidMount() {
        const db = firebase.firestore();
        db.collection("users_SO").where("SCategory", "==", "Stationary")
            .get()
            .then(querySnapshot => {
                this.setState({ nStationary: querySnapshot.size });
            });
        db.collection("users_SO").where("SCategory", "==", "General")
            .get()
            .then(querySnapshot => {
                this.setState({ nGeneral: querySnapshot.size });
            });
        db.collection("users_SO").where("SCategory", "==", "Plastics")
            .get()
            .then(querySnapshot => {
                this.setState({ nPlastics: querySnapshot.size });
            });
        db.collection("users_SO").where("SCategory", "==", "Groceries")
            .get()
            .then(querySnapshot => {
                this.setState({ nGroceries: querySnapshot.size });
            });

    }
    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.txt1}>Available shops near you</Text>


                <View style={styles.top}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('StationaryShopsCategory')} style={styles.part}>
                        <Image source={require('../assets/stationary.png')} style={{ height: 40, width: 40 }} />
                        <Text style={styles.txt}>Stationary</Text>
                    </TouchableOpacity>
                    <View style={styles.down}>
                        <Text style={styles.txt2}>{this.state.nStationary}</Text>
                    </View>
                </View>

                <View style={styles.top}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('GeneralShopsCategory')} style={styles.part}>
                        <Image source={require('../assets/supermarket.png')} style={{ height: 40, width: 40 }} />
                        <Text style={styles.txt}>General Store</Text>
                    </TouchableOpacity>
                    <View style={styles.down}>
                        <Text style={styles.txt2}>{this.state.nGeneral}</Text>
                    </View>
                </View>

                <View style={styles.top}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PlasticsShopsCategory')} style={styles.part}>
                        <Image source={require('../assets/sand.png')} style={{ height: 40, width: 40 }} />
                        <Text style={styles.txt}>Plasticware</Text>
                    </TouchableOpacity>
                    <View style={styles.down}>
                        <Text style={styles.txt2}>{this.state.nPlastics}</Text>
                    </View>
                </View>

                <View style={styles.top}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('GroceriesShopsCategory')} style={styles.part}>
                        <Image source={require('../assets/vegetable.png')} style={{ height: 40, width: 40 }} />
                        <Text style={styles.txt}>Groceries</Text>
                    </TouchableOpacity>
                    <View style={styles.down}>
                        <Text style={styles.txt2}>{this.state.nGroceries}</Text>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ddd",
        flexDirection: 'column',
    },
    top: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#E3CBAE',
        padding: 10,
        marginTop: 25,
        marginBottom: 25,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
    },
    down: {
        flex: 0.2,
        alignItems: 'center',
        backgroundColor: 'indianred',
        justifyContent: 'center',
        margin: 9,
        borderRadius: 20,
    },
    txt1: {
        fontFamily: 'Patua',
        fontSize: 22,
        alignSelf: 'center',
        marginTop: 5,
    },
    txt2: {
        fontFamily: 'Patua',
        fontSize: 22,
        color: 'white'
    },
    txt: {
        marginLeft: '5%',
        fontFamily: 'Patua',
        fontSize: 22,
        alignSelf: 'center'
    },
    part: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        flex: 1,
    }

});
