import { initializeApp } from "firebase/app";
import {getMessaging} from  "firebase/messaging"

const firebaseConfig = {
  apiKey: "AIzaSyDBc8LTaBkEJfOmwkHj66trC3mWGLnVrDU",
  authDomain: "oatly-3771e.firebaseapp.com",
  projectId: "oatly-3771e",
  storageBucket: "oatly-3771e.firebasestorage.app",
  messagingSenderId: "85464735488",
  appId: "1:85464735488:web:eadec637190319cc2e5de5",
  measurementId: "G-PMYRZQ6GHC",
};


export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);


