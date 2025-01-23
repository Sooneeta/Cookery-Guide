import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3PT3swPT-_L1ugXaWgJjkCu7IaOF2hp0",
  authDomain: "cookery-guide.firebaseapp.com",
  projectId: "cookery-guide",
  storageBucket: "cookery-guide.firebasestorage.app",
  messagingSenderId: "258791418303",
  appId: "1:258791418303:web:f241daca77cfd6f09dd90a",
  measurementId: "G-JK08XQ1SMF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
