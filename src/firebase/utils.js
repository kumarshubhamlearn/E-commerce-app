import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCe0xW8IYL_fH1dM9jkWJJCcN9imvUNow0",
  authDomain: "crown-b3960.firebaseapp.com",
  databaseURL: "https://crown-b3960.firebaseio.com",
  projectId: "crown-b3960",
  storageBucket: "",
  messagingSenderId: "678411423526",
  appId: "1:678411423526:web:b43694f4e3e66936"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;