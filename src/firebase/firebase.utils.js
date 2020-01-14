import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDj5C7C1uc96IL7OS525rPOXloEalRGE7Y",
    authDomain: "e-vaatekauppa.firebaseapp.com",
    databaseURL: "https://e-vaatekauppa.firebaseio.com",
    projectId: "e-vaatekauppa",
    storageBucket: "e-vaatekauppa.appspot.com",
    messagingSenderId: "892936829687",
    appId: "1:892936829687:web:6d4deab88c258f684c31f2",
    measurementId: "G-2F125BE2VP"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;