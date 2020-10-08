import { createStackNavigator } from 'react-navigation-stack';
import AddProduct from '../screens/AddProduct';
import Header from '../shared/header';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const screens = {
    AddProduct: {
        screen: AddProduct,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Add new product' />,
                headerLeft: () => {
                    return null;
                },
            }
        }
    },
}

const addProduct = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerBackground: () =>
            <LinearGradient
                colors={['#36D1DC', '#658DE4']}
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

export default addProduct;