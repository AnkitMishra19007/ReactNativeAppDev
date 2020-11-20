import { createStackNavigator } from 'react-navigation-stack';
import BuyerHome from '../screens/BuyerHome';
import GeneralShopsCategory from '../screens/GeneralShopsCategory';
import PlasticsShopsCategory from '../screens/PlasticsShopsCategory';
import StationaryShopsCategory from '../screens/StationaryShopsCategory';
import GroceriesShopsCategory from '../screens/GroceriesShopsCategory';
import ProductsList from '../screens/ProductsList';
import ParticularProduct from '../screens/ParticularProduct'
import buyerSearch from '../screens/buyerSearch';
import Cart from './Cart.js';
import Header from '../shared/header';
import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
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
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => navigation.navigate('buyerSearch')}>
                            <Image
                                style={{ width: 30, height: 30, marginRight: 20, }}
                                source={require("../assets/icons/search1.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                            <Image
                                style={{ width: 30, height: 30, marginRight: 25, }}
                                source={require("../assets/icons/shopping-cart.png")}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }
        }
    },
    GeneralShopsCategory: {
        screen: GeneralShopsCategory,
        navigationOptions: {
            title: 'General Shops',
        },
    },
    StationaryShopsCategory: {
        screen: StationaryShopsCategory,
        navigationOptions: {
            title: 'Stationary Shops',
        },
    },
    PlasticsShopsCategory: {
        screen: PlasticsShopsCategory,
        navigationOptions: {
            title: 'Plastics Shops',
        },
    },
    GroceriesShopsCategory: {
        screen: GroceriesShopsCategory,
        navigationOptions: {
            title: 'Groceries Shops',
        },
    },
    Cart: {
        screen: Cart,
        navigationOptions: {
            title: 'Cart',
        },
    },
    buyerSearch: {
        screen: buyerSearch,
        navigationOptions: {
            title: 'Search any product',
        }
    },
    ProductsList: {
        screen: ProductsList,
        navigationOptions: {
            title: 'Products List',
        },
    },
    ParticularProduct: {
        screen: ParticularProduct,
        navigationOptions: {
            title: '',
        },
    },

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
            fontFamily: 'Patua',

        },


    }
});

export default buyerStack;
