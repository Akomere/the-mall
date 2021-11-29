import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { unregister } from '../serviceWorkerRegistration';


const config = {
  apiKey: "AIzaSyClF6obtPbhG3VaU-PqzNLM4uC1IqE0aNc",
  authDomain: "the-mall-31c69.firebaseapp.com",
  projectId: "the-mall-31c69",
  storageBucket: "the-mall-31c69.appspot.com",
  messagingSenderId: "536936809712",
  appId: "1:536936809712:web:5c5e0580082218c728ee35",
  measurementId: "G-5NXE7Q6VHZ"
};

export const createUserProfileDoc = async (userAuth, moreData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get()
  console.log(snapshot)

  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...moreData
      })

    } catch (error) {
      console.log('could not create user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const googleSignIn = () => auth.signInWithPopup(provider)