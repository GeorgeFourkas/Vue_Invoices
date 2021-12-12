import firebase from "firebase/compat";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDs2-JjBlLl3FzX_LMp-qZd-Cron0fDnRw",
    authDomain: "vue-invoices-202a2.firebaseapp.com",
    projectId: "vue-invoices-202a2",
    storageBucket: "vue-invoices-202a2.appspot.com",
    messagingSenderId: "307798326773",
    appId: "1:307798326773:web:3a38e4e80174ed1d4534bc"
});
export  default firebaseApp.firestore();
