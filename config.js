import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCLliCSylVDA9o10M59IFzx2NaAk27eAUg",
  authDomain: "story-hub-9222a.firebaseapp.com",
  projectId: "story-hub-9222a",
  storageBucket: "story-hub-9222a.appspot.com",
  messagingSenderId: "830074863363",
  appId: "1:830074863363:web:6e2821ff48e4bb4863f336"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();