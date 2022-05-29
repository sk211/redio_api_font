import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initalizeAuthentaction = () =>{
     initializeApp(firebaseConfig);
}

export default initalizeAuthentaction;
