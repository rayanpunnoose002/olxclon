import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDqU-rK3TGHNURpRcYx-6d4QwuQ_yfQB5M",
    authDomain: "olxclone-3c174.firebaseapp.com",
    projectId: "olxclone-3c174",
    storageBucket: "olxclone-3c174.appspot.com",
    messagingSenderId: "980242320086",
    appId: "1:980242320086:web:ca9d3adf52c4dd263c5777",
    measurementId: "G-Z2EZ32VF92"
  };

  export  default  firebase.initializeApp(firebaseConfig)