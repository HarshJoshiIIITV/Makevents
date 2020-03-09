import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  var firebaseConfig = {
    apiKey: "AIzaSyAumt8qD6a0iUv5n8-LFN1xignU4TjdSko",
    authDomain: "makevents-82d22.firebaseapp.com",
    databaseURL: "https://makevents-82d22.firebaseio.com",
    projectId: "makevents-82d22",
    storageBucket: "makevents-82d22.appspot.com",
    messagingSenderId: "914068508921",
    appId: "1:914068508921:web:d402adf5855fcad0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;