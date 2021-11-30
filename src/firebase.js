import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDQqpA3IvQcXei-SZWFIiyd3DT6FkH2wV0",
  authDomain: "walletconnect-e9cc1.firebaseapp.com",
  projectId: "walletconnect-e9cc1",
  storageBucket: "walletconnect-e9cc1.appspot.com",
  messagingSenderId: "41562693887",
  appId: "1:41562693887:web:052a6b4c032cb3e973ecca",
};

firebase.initializeApp(firebaseConfig);

export const firebaseAnalytics = firebase.analytics();

export default firebase;
