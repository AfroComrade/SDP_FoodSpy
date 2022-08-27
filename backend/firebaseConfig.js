import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseconfig = 
{

};


const app = initializeApp(firebaseconfig);
export const auth = getAuth(app);