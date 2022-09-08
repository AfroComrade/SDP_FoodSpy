import logo from './logo.svg';
import './App.css';
import { auth } from "./firebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";


function login()
{
    /*
    
        User login variables for login, new user and forgot password functions.

    */
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword,setConfirmLoginPassword] = useState("");
    const [user, setUser] = useState({});


    /*
    
        Login fuction
    
    */
    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log(user);
           //--------------------//
          //Change page here
         //--------------------//
        } catch (error) {
          console.log(error.message);
           //--------------------//
          //Show error message here
         //--------------------//
        }
      };



      /*
      
      Basic HTML subject to change.
      
      
      
      */
      return (
        <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>
      );
}

export default login;



