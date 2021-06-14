import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";

let firebaseConfig = {
    apiKey: "AIzaSyDcz0l_dzWJNy38F-n9JoiP2F7SGjeoAks",
    authDomain: "crud-vue-fe38e.firebaseapp.com",
    databaseURL: "https://crud-vue-fe38e.firebaseio.com",
    projectId: "crud-vue-fe38e",
    storageBucket: "crud-vue-fe38e.appspot.com",
    messagingSenderId: "130293861528",
    appId: "1:130293861528:web:1370b6be77ef3c35"
  };

  if (firebase.apps.length) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;