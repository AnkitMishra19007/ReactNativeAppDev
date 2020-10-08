import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import { Image } from 'react-native';
import sellerStack from './sellerStack';
import addProduct from './addProduct';
import contactUsSeller from './contactUsSeller';


const RootDrawerNavigator = createDrawerNavigator({
    sellerStack: {
        screen: sellerStack,
        navigationOptions: {

            title: 'Home',
            drawerIcon: (
                <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/icons/home.png")}
                />
            ),
        }

    },
    addProduct: {
        screen: addProduct,
        navigationOptions: {

            title: 'Add new product',
            drawerIcon: (
                <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/icons/add.png")}
                />
            ),
        }

    },
    contactUsSeller: {
        screen: contactUsSeller,
        navigationOptions: {

            title: 'Contact Us',
            drawerIcon: (
                <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/icons/contactUs.png")}
                />
            ),
        }

    },
})

export default createAppContainer(RootDrawerNavigator);