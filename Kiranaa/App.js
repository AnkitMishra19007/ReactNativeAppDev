import React,{useState} from 'react';
// import Navigator from './routes/startStack';
import * as firebase from 'firebase';
import { firebaseConfig } from './config';
import Navigator from './routes/startStack';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFont= ()=>{
  return Font.loadAsync({
    'Patua': require('./assets/fonts/PatuaOne-Regular.ttf'),
    'Marker': require('./assets/fonts/PermanentMarker-Regular.ttf')
  });
};

firebase.initializeApp(firebaseConfig);
export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);

 if(!fontLoaded){
   return <AppLoading
   startAsync={fetchFont}
    onError={()=> console.log("Error")}
    onFinish={()=>{
    setfontLoaded(true);
   }}
   />
 };

  return (
    <Navigator />
  );
}
