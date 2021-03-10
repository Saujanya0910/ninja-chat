import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDoyYwr_KRxRHLLaA8kZLvpRB9r3QxhKBA",
    authDomain: "ninja-chat-saujanya0910.firebaseapp.com",
    projectId: "ninja-chat-saujanya0910",
    storageBucket: "ninja-chat-saujanya0910.appspot.com",
    messagingSenderId: "856942842963",
    appId: "1:856942842963:web:5e2a2af54362a6da1da2a6"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()