import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPbQM9WW9YtqIj_CbivQXlIqrD5QfaxgI",
  authDomain: "react-notes-8444e.firebaseapp.com",
  projectId: "react-notes-8444e",
  storageBucket: "react-notes-8444e.appspot.com",
  messagingSenderId: "243902278284",
  appId: "1:243902278284:web:1b131a51a89a0fd616e9a9"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const notesCollection=collection(db, "notes")