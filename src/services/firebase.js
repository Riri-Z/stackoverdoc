import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBsKuXeDNpGtJwot-IBq4-LJPUNY4tK30",
  authDomain: "stockoverdoc.firebaseapp.com",
  databaseURL: "https://stockoverdoc.firebaseio.com",
  projectId: "stockoverdoc",
  storageBucket: "stockoverdoc.appspot.com",
  messagingSenderId: "829695168369",
  appId: "1:829695168369:web:7d9ade95a94f6088d630d0",
  measurementId: "G-NHWW3TGMYD",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;