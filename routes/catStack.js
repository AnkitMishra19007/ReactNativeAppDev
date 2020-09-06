import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CatList from '../screens/CatList';
import BathScreen from '../screens/BathScreen'
import CerealsScreen from '../screens/CerealsScreen';
import DairyScreen from '../screens/DairyScreen';
import BeautyScreen from '../screens/BeautyScreen';
import SnacksScreen from '../screens/SnacksScreen'
import BeveragesScreen from '../screens/BeveragesScreen'


const screens = {
    CatList: {
        screen: CatList,
    },
    BathScreen: {
        screen: BathScreen,
    },
    CerealsScreen: {
        screen: CerealsScreen,
    },
    DairyScreen: {
        screen: DairyScreen,
    },
    BeautyScreen: {
        screen: BeautyScreen,
    },
    SnacksScreen: {
        screen: SnacksScreen,
    },
    BeveragesScreen: {
        screen: BeveragesScreen,
    }

};

// home stack navigator screens
const CatStack = createStackNavigator(screens);

export default createAppContainer(CatStack);