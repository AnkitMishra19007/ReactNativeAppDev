import React from 'react';
import * as firebase from 'firebase';
import { firebaseConfig } from './config';
import Navigator from './routes/startStack';

firebase.initializeApp(firebaseConfig);
export default function App() {
  return (
    <Navigator />
  );
}
