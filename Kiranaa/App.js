import React from 'react';
// import Navigator from './routes/startStack';
import * as firebase from 'firebase';
import { firebaseConfig } from './config';
import Navigator from './routes/startStack';

firebase.initializeApp(firebaseConfig);
export default function App() {
  return (
    <Navigator />
  );
}