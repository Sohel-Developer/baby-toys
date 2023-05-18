// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmuxX1OsbS7g5STaGX9ovKykqTDlkFHho",
    authDomain: "baby-toy-car.firebaseapp.com",
    projectId: "baby-toy-car",
    storageBucket: "baby-toy-car.appspot.com",
    messagingSenderId: "56036463808",
    appId: "1:56036463808:web:d09e9883cce14097944925"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;