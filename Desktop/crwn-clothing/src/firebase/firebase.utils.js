import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBRZX6c_T-2u5p1zsp7_D904B7ucDXaFZQ",
    authDomain: "crwn-db-bf7c2.firebaseapp.com",
    projectId: "crwn-db-bf7c2",
    storageBucket: "crwn-db-bf7c2.appspot.com",
    messagingSenderId: "385358339835",
    appId: "1:385358339835:web:33383665541299c484da5e",
    measurementId: "G-6PRSLZGY6N"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
