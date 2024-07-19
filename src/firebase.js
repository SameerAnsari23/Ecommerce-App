// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu9ZNKEVP-REH5v-icECsSxXguS2KQUEQ",
  authDomain: "ecommercereact-7fadf.firebaseapp.com",
  projectId: "ecommercereact-7fadf",
  storageBucket: "ecommercereact-7fadf.appspot.com",
  messagingSenderId: "1038596520376",
  appId: "1:1038596520376:web:d842d793a67c54e32f774d",
  measurementId: "G-FFY33Q1GYE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);