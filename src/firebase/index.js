import app from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB6f8q-bjq-OdZVzi3_GLVswfbV3JcQKYI",
    authDomain: "proyecto-ddi.firebaseapp.com",
    databaseURL: "https://proyecto-ddi-default-rtdb.firebaseio.com",
    projectId: "proyecto-ddi",
    storageBucket: "proyecto-ddi.appspot.com",
    messagingSenderId: "168124626246",
    appId: "1:168124626246:web:d4495a3809c0c1e7c7a147",
    measurementId: "G-H1TM0BSZXD"
  };


  app.initializeApp(firebaseConfig);

  const db = app.database();

  const FIREBASE = {
    db
  }

  export default FIREBASE;