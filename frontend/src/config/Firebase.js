import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
//console.log(process.env.REACT_APP_FIREBASE_API_KEY);


 function APP()
{
    
    alert(process.env.REACT_APP_API_KEY +"  "+process.env.REACT_APP_AUTH_DOMAIN +"  "+process.env.PROJECT_ID +"  "+process.env.CLIENT_ID);
   
    const firebaseConfig = 
    {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        appId: process.env.CLIENT_ID
        /*
        apiKey: "AIzaSyADxKdEJe6XeTuLZzxKjKS6JOPPbvTC7X0",
        authDomain: "rhenusitregister.firebaseapp.com",
        projectId: "rhenusitregister",
        storageBucket: "rhenusitregister.appspot.com",
        messagingSenderId: "104795139606",
        appId: "1:104795139606:web:0b142b611ed3e64856cf37",
        measurementId: "G-X3FX1Y76D6"*/
    };
    //console.log(process.env.REACT_APP_FIREBASE_API_KEY);
    const app = initializeApp(firebaseConfig);



    return app;
}

export function SetUpUsers()
{
    const AP = APP();
    const AU = getAuth(AP);

    return AU;
}




