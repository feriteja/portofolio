// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi5eemSF0QnlD9-CANqJySkTot6VgSuIk",
  authDomain: "feri-teja-kusuma.firebaseapp.com",
  projectId: "feri-teja-kusuma",
  storageBucket: "feri-teja-kusuma.appspot.com",
  messagingSenderId: "400166500823",
  appId: "1:400166500823:web:c672f7e4d4e7839740b392",
  measurementId: "G-4Q5T6YFPSZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
