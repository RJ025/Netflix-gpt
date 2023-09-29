import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDownloadURL, getStorage , ref, uploadBytes } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBqIq9KEkL1F9neCc1d0GXaN-vqJQZMYZ0",
  authDomain: "netflix-gpt-c972d.firebaseapp.com",
  projectId: "netflix-gpt-c972d",
  storageBucket: "netflix-gpt-c972d.appspot.com",
  messagingSenderId: "716284598319",
  appId: "1:716284598319:web:f4013e7bf729b0054f0eda"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const storage = getStorage(app);


// storage
