// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIW0ua7ZsZjQt5JDjJxuJV5sg4D8RZwfQ",
  authDomain: "online-canteen-32cab.firebaseapp.com",
  projectId: "online-canteen-32cab",
  storageBucket: "online-canteen-32cab.appspot.com",
  messagingSenderId: "572459373243",
  appId: "1:572459373243:web:5dbaa61ea0281349b98f9e",
  measurementId: "G-7N18WDJ4YE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)

const googleSignInBtn = document.querySelector('.google-sign-in');
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

googleSignInBtn.addEventListener('click', ()=> {
signInWithPopup(auth, provider).then((result) => {
const user =result.user;
alert(`Hello ${user.displayName}`)
}).catch((error) =>{
  const errorMessage = error.message;
  alert('Error ${errorMessgae}')
});
});