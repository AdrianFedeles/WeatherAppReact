import firebase from "firebase/app";
import "firebase/auth";

const config = {
  databaseURL: "http://reactweatherapp-a42d3.firebaseapp.com",
  apiKey: "AIzaSyAL01-1sVwAnkfKyO7grQqhsC8K3CTMIl8",
  authDomain: "reactweatherapp-a42d3.firebaseapp.com",
  projectId: "reactweatherapp-a42d3",
  storageBucket: "reactweatherapp-a42d3.appspot.com",
  messagingSenderId: "907684543403",
  appId: "1:907684543403:web:7345933bcf5536d51070ee",
  measurementId: "G-ZF26FZ5N3H"
};

const fire = firebase.initializeApp(config);
const firebaseAuth = fire.auth();

export { firebaseAuth };