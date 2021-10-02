import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics'


const firebaseConfig = {
    apiKey: "AIzaSyCUStnyGOWdRc90A2KPM6RqDqKyOfaHSfY",
    authDomain: "toyourfans.firebaseapp.com",
    projectId: "toyourfans",
    storageBucket: "toyourfans.appspot.com",
    messagingSenderId: "436020937787",
    appId: "1:436020937787:web:00565e4ccca65e3a2cc81e",
    measurementId: "G-J0TCRQGDSK"
};

  // Initialize Firebase

firebase.initializeApp(firebaseConfig);

  firebase.analytics();


// if( process.env.NODE_ENV === 'test' ) {
//     // testing
//     firebase.initializeApp(firebaseConfigTesting);
// } else {
// dev/prod
// firebase.initializeApp(firebaseConfig);
// }

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}