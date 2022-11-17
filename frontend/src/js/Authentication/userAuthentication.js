import {SetUpUsers} from '../../config/Firebase';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail  } from "firebase/auth";

async function IsEmpty (Input){
    
    if(Input.length == 0)
    {
        return true;
    }
    else
    {
        return false;
    }

}

async function IsPassword (Password) 
{
   
    let RGX = new RegExp('/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,15}$/');

    console.log(RGX.match(Password));

}

async function PasswordMatch (originalPassword,ConfirmPassword) 
{
    if(originalPassword === ConfirmPassword)
    {
        return true;
    }
    return false;
}

async function CheckUserName(UserName)
{
    //Search usernames in firebase to check username

    return false;
}


//--------------------------------------------------------------------//

/*

    User Login Block

*/


export const Login  = async (EML,PWD)  => 
{
    const Details = 
    {
        E:EML,
        P: PWD
    }

    const Go =
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(Details)
    }
    const data = await fetch(
        `https://sdpfoodspy.herokuapp.com/api/account/Login`,Go
     ); 
     const items = await data.json();
     console.log(items.value);
     if(items.value != null)
     {
        alert("You are now logged in!!");
        return true;
     }
     else
     {
        alert("Incorrect details!!");
        return false;
        
     }
}


/*

    Forgot Password Block
    - Sends reset link to user but does not show if email does not exist for security reasons

*/

export const  ForgotsPassword  = async (UserEmail)  =>
{
    const data = await fetch(
        `https://sdpfoodspy.herokuapp.com/api/account/forgotpassword/${UserEmail}`
     );
     const items = await data.json();
     console.log(items);
     alert("You are now logged in!!");
}


//--------------------------------------------------------------------//


/*   
    Sign out
*/

async function Signout()
{
    try 
    {
        Signout(SetUpUsers()).then(() =>{
            /* 
                Sign out successfull
                exit out user
            */
            
        }).catch((error) =>{
            console.log(error.message)
        });
    } 
    catch (error) 
    {
        console.log(error.message);
    }
}

//--------------------------------------------------------------------//

/*

    User Creation Block
    - User is to be created with username, email, Password and confirm password params.
    
*/


export const  UserCreate = async (EML,PWD,CFPWD,USRName) =>
{
    console.log("Begin");
    const Details = 
    {
        E:EML,
        P: PWD,
        CP:CFPWD,
        UN:USRName
    }
    const Go =
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(Details)
    }
    const data = await fetch(
        `https://sdpfoodspy.herokuapp.com/api/account/CreateUser`,Go
     );
     const items = await data.json();
     console.log("Here" + items.value);
     if(items.value != null)
     {
        alert("You are now a user in Foodspy");
        return true;
     }
     else
     {
        alert("Please make sure all correct details are in");
        return false;
     }  
     console.log("End");
     
}


//--------------------------------------------------------------------//



