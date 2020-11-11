import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import { Image } from 'react-native';
import buyerStack from './buyerStack';
import LogOut from '../screens/LogOut';
import CustomerProfile from './CustomerProfile';
import CustomerPast from './CustomerPast';
import { color } from 'react-native-reanimated';


const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: buyerStack,//What we want to show
        navigationOptions: {
            title: 'Products',
            drawerIcon: (
                <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/icons/box.png")}
                />
            ),
        }

    },
    MyProfile: {
        screen: CustomerProfile,
        navigationOptions: {
            title: 'My Profile',
            drawerIcon: (
                <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/icons/user.png")}
                />
            ),
        }
    },
    History: {
        screen: CustomerPast,
        navigationOptions: {
            title: 'History',
            drawerIcon: (
                <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/icons/history.png")}
                />
            ),
        }
    },
    Complain: {
        screen: CustomerProfile,
        navigationOptions: {
            title: 'Complain',
            drawerIcon: (
                <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/icons/inbox.png")}
                />
            ),
        }
    },
    LogOut: {
        screen: LogOut,
        navigationOptions: {
            title: 'Log Out',
            drawerIcon: (
                <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/icons/out.png")}
                />
            ),
        }
    },

});
export default createAppContainer(RootDrawerNavigator);
