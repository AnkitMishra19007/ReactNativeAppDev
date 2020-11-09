import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ProductsList extends React.Component {


    render() {

        return (
            <View style={styles.container}>
                <Text>{this.props.navigation.getParam('Sname')}</Text>
            </View>
        );

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3D3D3",
        justifyContent: 'center',
        alignItems: 'center',

    },

});
