// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHieduKl4Jl1nf9I3n92yNZso7Tm-bPtY",
  authDomain: "noctara-game-hub.firebaseapp.com",
  projectId: "noctara-game-hub",
  storageBucket: "noctara-game-hub.firebasestorage.app",
  messagingSenderId: "184305030637",
  appId: "1:184305030637:web:c2c0a071d45645c861c3e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;