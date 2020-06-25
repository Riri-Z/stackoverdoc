import * as firebase from "firebase/app";
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBsKuXeDNpGtJwot-IBq4-LJPUNY4tK30",
  authDomain: "stockoverdoc.firebaseapp.com",
  databaseURL: "https://stockoverdoc.firebaseio.com",
  projectId: "stockoverdoc",
  storageBucket: "stockoverdoc.appspot.com",
  messagingSenderId: "829695168369",
  appId: "1:829695168369:web:4d7d551726cfdf65d630d0",
  measurementId: "G-4NHEW2L9X1",
};
// Initialize Firebase

export default firebase.initializeApp(firebaseConfig);
