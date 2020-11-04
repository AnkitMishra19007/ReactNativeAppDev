import React from 'react';
import { StyleSheet, Button, Image, Text, View, Alert, FlatList, TouchableOpacity, State, ScrollView } from 'react-native';
//import { ScrollView } from "react-native-gesture-handler";
import * as firebase from 'firebase';


export default class GeneralShopsCategory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shopsDetails: []
        };
    }
    componentDidMount() {
        const db = firebase.firestore();
        db.collection("users_SO").where("SCategory", "==", "Groceries")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                //console.log(data);
                this.setState({ shopsDetails: data });
            });
    }
    renderGridItem(item) {
        return (<View style={styles.shopDetailCard}><Text>{y.Sname}</Text></View>
        );
    }
    render() {
        const { shopsDetails } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView >
                    <View style={styles.shopList}>
                        {this.state.shopsDetails.map((y) => {
                            return (<View style={styles.shopDetailCard}><Image style={styles.cardImage} source={require('../assets/images/shopImage.jpg')} /><Text style={styles.cardtext}>{y.Sname}</Text></View>);//<View style={styles.shopDetailCard}><Text>{y.Sname}</Text></View>
                        })
                        }
                    </View>
                </ScrollView>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ddd",
        flexDirection: 'column',
    },
    shopList: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 10,
        justifyContent: 'space-evenly',

    },
    shopDetailCard: {
        alignItems: 'center',
        flexBasis: '49%',
        backgroundColor: "#fff",
        height: 250,
        borderRadius: 4,
        marginBottom: 4,

    },
    cardImage: {
        marginTop: 30,
        height: 150,
        width: 150
    },
    cardtext: {
        marginTop: 10,
        fontSize: 20
    }

});
