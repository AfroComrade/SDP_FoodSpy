import axios from "axios";
import React from "react";
import { createUserWithEmailAndPassword,sendPasswordResetEmail, signInWithEmailAndPassword, onAuthStateChanged,signOut} from "firebase/auth";


/*

    Validation Block
    -  IsEmpty will identify if  input contains values or not. Returns true if empty
    -  IsPassword will identify if the password matches our terms.Returns true if meets terms
    -  PasswordMatch will identify if the password matches the confirmed password. Returns false if they do not match

*/

export function IsEmpty (Input){
    if(Input.value === "")
    {
        return true;
    }
    return false;
}

export function IsPassword (Password) 
{
   
    let RGX = new RegExp('/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,15}$/');

    console.log(RGX.test(Password) === true);

}

export function PasswordMatch (originalPassword,ConfirmPassword) 
{
    if(originalPassword === ConfirmPassword)
    {
        return true;
    }
    return false;
}


//--------------------------------------------------------------------//


/*

    User Creation Block
    - User is to be created with username, DOB, email, Password and confirm password params.
    
*/

function UserCreate  (EML,PWD,CFPWD,DOB)
{

}


//--------------------------------------------------------------------//


/*

    User Login Block

*/

/*
export const Login = async (EML,PWD) => {
    try 
    {
        const USR = await signInWithEmailAndPassword(Auth,EML,PWD);
        console.log(USR);
        
            //Navigate to next page.
        
    } 
    catch (error) 
    {
        console.log(error.message);
    }
}
*/

//--------------------------------------------------------------------//


/*

    Forgot Password Block
    - 

*/

function ForgotPassword  (UserEmail) 
{

}

//--------------------------------------------------------------------//