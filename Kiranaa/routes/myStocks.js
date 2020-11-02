import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import MyStocks from '../screens/MyStocks';
import {Image, TouchableOpacity, View} from 'react-native';
import Header from '../shared/header';
import RegisterProduct from '../screens/RegisterProduct'
import search from '../screens/search'

const screens = {
    MyStocks: {
        screen: MyStocks,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='My Stocks' />,
                headerLeft: () => {
                    return null;
                },
                headerRight: () => (
                    <View style={{flexDirection:"row"}}>
                    <TouchableOpacity onPress={() => navigation.navigate('search')}>
                    <Image
                    style={{ width: 30, height: 30, marginRight: 25,}}
                    source={require("../assets/icons/search.png")}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterProduct')}>
                    <Image
                    style={{ width: 30, height: 30, marginRight: 25,}}
                    source={require("../assets/icons/plus.png")}
                    />
                    </TouchableOpacity>
                    </View>
                    
                ),
                
            }
        }
    },
    RegisterProduct:{
        screen: RegisterProduct,
        navigationOptions: {
            title: 'Add a new product',
        },
    },
    search:{
        screen: search,
        navigationOptions: {
            title: 'Search product',
        },
    },
}

const myStock = createStackNavigator(screens, {
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


    }
});

export default myStock;