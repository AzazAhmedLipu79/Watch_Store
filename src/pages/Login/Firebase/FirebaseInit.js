import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};

export default initializeFirebase;
