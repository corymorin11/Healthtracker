import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBHwzMghAABRAuKr5oQ6qoJdLYqQvP-uo0",
  authDomain: "authentication2-24237.firebaseapp.com",
  databaseURL: "https://authentication2-24237.firebaseio.com",
  projectId: "authentication2-24237",
  storageBucket: "",
  messagingSenderId: "813975680001",
  appId: "1:813975680001:web:c60653a804bd6d272a7c00"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
