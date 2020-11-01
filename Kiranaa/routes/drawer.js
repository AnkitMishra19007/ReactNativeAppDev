import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import { Image } from 'react-native';
import sellerStack from './sellerStack';
import myStocks from './myStocks';
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
    myStocks: {
        screen: myStocks,
        navigationOptions: {

            title: 'Current Stocks',
            drawerIcon: (
                <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/icons/cube.png")}
                />
            ),
        }

    },


    profile: {
        screen: contactUsSeller,
        navigationOptions: {
            title: 'Profile',
            drawerIcon: (
                <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/icons/user1.png")}
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
