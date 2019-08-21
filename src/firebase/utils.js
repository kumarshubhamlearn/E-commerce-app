import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCe0xW8IYL_fH1dM9jkWJJCcN9imvUNow0',
  authDomain: 'crown-b3960.firebaseapp.com',
  databaseURL: 'https://crown-b3960.firebaseio.com',
  projectId: 'crown-b3960',
  storageBucket: '',
  messagingSenderId: '678411423526',
  appId: '1:678411423526:web:b43694f4e3e66936'
};

//creating a new user document
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //check if there is someone logged in
  //if not.. return
  if (!userAuth) return;

  //if someone is logged in
  //assigning document reference object
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //Document reference and document object are different

  //assigning user data/document object
  const snapShot = await userRef.get();

  //checking if data doesn't exist
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    //creating new user document
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

//below are all essential code for auth
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
