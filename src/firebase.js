import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAX2rSDr2TjbNkFesNN92DoTMuwIqQ_bsk",
  authDomain: "health-tracker-90a41.firebaseapp.com",
  databaseURL: "https://health-tracker-90a41.firebaseio.com",
  projectId: "health-tracker-90a41",
  storageBucket: "health-tracker-90a41.appspot.com",
  messagingSenderId: "61788756930",
  appId: "1:61788756930:web:346ebe79ccb7d160ae545b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
