import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig= {
    apiKey: "AIzaSyDIdh0W1_5S1Frldg_F5WTJaWlcsSX9b1A",
    authDomain: "revents-5ce16.firebaseapp.com",
    databaseURL: "https://revents-5ce16.firebaseio.com",
    projectId: "revents-5ce16",
    storageBucket: "revents-5ce16.appspot.com",
    messagingSenderId: "959938955206",
    appId: "1:959938955206:web:18471199e0c5b96c8454c7",
    measurementId: "G-20T7F0W85V"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;