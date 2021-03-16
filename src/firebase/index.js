import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6f8q-bjq-OdZVzi3_GLVswfbV3JcQKYI",
  authDomain: "proyecto-ddi.firebaseapp.com",
  databaseURL: "https://proyecto-ddi-default-rtdb.firebaseio.com",
  projectId: "proyecto-ddi",
  storageBucket: "proyecto-ddi.appspot.com",
  messagingSenderId: "168124626246",
  appId: "1:168124626246:web:d4495a3809c0c1e7c7a147",
  measurementId: "G-H1TM0BSZXD",
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
export const auth = app.auth();
export const storage = app.storage();

