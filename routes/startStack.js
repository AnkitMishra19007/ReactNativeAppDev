import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import StartScreen from '../screens/StartScreen';
import LogInShopOwner from '../screens/LogInShopOwner';
import LogInCustomer from '../screens/LogInCustomer';
import AboutUs from '../screens/AboutUs';
import ContactUs from '../screens/ContactUs';
import SignUpShopOwner from '../screens/SignUpShopOwner';
import SignUpCustomer from '../screens/SignUpCustomer';


const screens = {
    StartScreen: {
        screen: StartScreen,
        navigationOptions: {
            title: 'KI₹ANAA',
            headerTitleStyle: {
                textAlign: "center",
                fontSize: 32,
            },

        }
    },
    LogInShopOwner: {
        screen: LogInShopOwner,
        navigationOptions: {
            title: 'LOG IN',
        },
    },
    LogInCustomer: {
        screen: LogInCustomer,
        navigationOptions: {
            title: 'LOG IN Customer',
        },
    },
    AboutUs: {
        screen: AboutUs,
        navigationOptions: {
            title: 'About Us',
        },

    },
    ContactUs: {
        screen: ContactUs,
    },
    SignUpShopOwner: {
        screen: SignUpShopOwner,
        navigationOptions: {
            title: 'Sign Up Shop Owner',
        },
    },
    SignUpCustomer: {
        screen: SignUpCustomer,
        navigationOptions: {
            title: 'Sign Up Customer',
        },
    }

}
const StartStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#c9b5aa',
        },
        headerTitleStyle: {
            flex: 1,
            fontSize: 22,
            fontWeight: 'normal',

        },
        headerTintColor: 'teal'


    }
});

export default createAppContainer(StartStack);
