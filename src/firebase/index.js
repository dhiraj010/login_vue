import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDG-QN8dv-j95jhw3wGrT3WWHk7pgxyd1A",
  authDomain: "vue-auth-99dd3.firebaseapp.com",
  projectId: "vue-auth-99dd3",
  storageBucket: "vue-auth-99dd3.appspot.com",
  messagingSenderId: "828841295569",
  appId: "1:828841295569:web:9e61719d5038cbd5550ff0"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app) 

export { auth }