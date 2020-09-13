import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import StartScreen from '../screens/StartScreen';
import LogInShopOwner from '../screens/LogInShopOwner';
import LogInCustomer from '../screens/LogInCustomer';
import AboutUs from '../screens/AboutUs';
import ContactUs from '../screens/ContactUs';
import SignUpShopOwner from '../screens/SignUpShopOwner';
import SignUpCustomer from '../screens/ContactUs';


const screens = {
    StartScreen: {
        screen: StartScreen,
        navigationOptions: {
            title: 'KI₹ANAA',
        },

    },
    LogInShopOwner: {
        screen: LogInShopOwner,
        navigationOptions: {
            title: '',
        },

    },
    LogInCustomer: {
        screen: LogInCustomer,
        navigationOptions: {
            title: '',
        },
    },
    AboutUs: {
        screen: AboutUs,
    },
    ContactUs: {
        screen: ContactUs,
    },
    SignUpShopOwner: {
        screen: SignUpShopOwner,
        navigationOptions: {
            title: '',
        },
    },
    SignUpCustomer: {
        screen: SignUpCustomer,
        navigationOptions: {
            title: '',
        },
    }

}
const StartStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#c9b5aa',
        },
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1,
            fontSize: 32,
            fontWeight: 'normal',
            letterSpacing: 1.3,

        },
        headerTintColor: 'teal'
    }
});

export default createAppContainer(StartStack);