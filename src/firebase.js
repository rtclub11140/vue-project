import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCZHSPBjHjZGAx_Ab0U-Q5OyGjQBCBtj2A",
  authDomain: "tutor4dev-firebase.firebaseapp.com",
  databaseURL: "https://tutor4dev-firebase.firebaseio.com",
  projectId: "tutor4dev-firebase",
  storageBucket: "tutor4dev-firebase.appspot.com",
  messagingSenderId: "702888070003"
};
const firebaseApp = () => {
  if (firebase.apps[0]) {
    return firebase.apps[0];
  } else {
    return firebase.initializeApp(config);
  }
};
export { firebaseApp };
