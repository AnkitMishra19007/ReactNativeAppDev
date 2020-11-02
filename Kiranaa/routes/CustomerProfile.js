import { createStackNavigator } from 'react-navigation-stack';
import customerProfile from '../screens/customerProfile';
import Header from '../shared/header';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const screens = {
    customerProfile: {
        screen: customerProfile,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='My Profile' />,
                headerLeft: () => {
                    return null;
                },
            }
        }
    },
}

const CustomerProfile = createStackNavigator(screens, {
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
        headerTintColor: 'teal'


    }
});

export default CustomerProfile;