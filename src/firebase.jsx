import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB-F8Lzb_BgPskbAjZmod0I6DJez-sOPtI",
  authDomain: "agri-site-d1185.firebaseapp.com",
  projectId: "agri-site-d1185",
  storageBucket: "agri-site-d1185.appspot.com",
  messagingSenderId: "68480493464",
  appId: "1:68480493464:web:a3e1b3e50a33a725bd6ded"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage }