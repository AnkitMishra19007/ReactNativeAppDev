import { createStackNavigator } from 'react-navigation-stack';
import BuyerHome from '../screens/BuyerHome';
import Cart from './Cart.js';
import Header from '../shared/header';
import React from 'react';
import {Image, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const screens = {
    BuyerHome: {
        screen: BuyerHome,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='KIRANAA' />,
                headerLeft: () => {
                    return null;
                },
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Image
                    style={{ width: 30, height: 30, marginRight: 25,}}
                    source={require("../assets/icons/shopping-cart.png")}
                    />
                    </TouchableOpacity>
                )
            }
            }
        },
    Cart:{
        screen: Cart,
        navigationOptions: {
            title: 'Items in Cart',
        },
    }
    }

const buyerStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerBackground: () =>
            <LinearGradient
                colors={['orange', 'indianred']}
                start={[0.0, 0.0]}
                style={{ flex: 1 }}
                end={[1.0, 0]} />
        ,
        headerTitleStyle: {
            flex: 1,
            fontSize: 22,
            fontWeight: 'normal',

        },


    }
});

export default buyerStack;
