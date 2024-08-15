// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD14-ZQedWRtaumRNrPk3ice_OTId7c1ok",
  authDomain: "itl25-conference.firebaseapp.com",
  projectId: "itl25-conference",
  storageBucket: "itl25-conference.appspot.com",
  messagingSenderId: "703687261913",
  appId: "1:703687261913:web:c2485a788c52b7512948c8",
  measurementId: "G-JCRNGQ3J8F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };
