import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialiseAuthentication=()=>{
    initializeApp(firebaseConfig);
}
export default initialiseAuthentication;