import { createStackNavigator } from 'react-navigation-stack';
import customerPast from '../screens/customerPast';
import Header from '../shared/header';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const screens = {
    customerPast: {
        screen: customerPast,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='My Past Orders' />,
                headerLeft: () => {
                    return null;
                },
            }
        }
    },
}

const CustomerPast = createStackNavigator(screens, {
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

export default CustomerPast;