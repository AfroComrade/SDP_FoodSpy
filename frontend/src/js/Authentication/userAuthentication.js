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
    if((IsEmpty(EML) === true) || (IsEmpty(PWD) === true))
   {
        alert("Please enter an email address and password");
   }
   else
   {
    console.log("StartUSR");
    try 
    {

            //const auth = ;        
            const USR = await signInWithEmailAndPassword(SetUpUsers(),EML,PWD)
            .catch((error) =>
            {
               alert("Incorrect email or password");
             });;
            console.log(USR);
        
    } 
    catch (error) 
    {
        console(error.message);
        alert("User:" + EML + " is now logged in");
    }
}
}


/*

    Forgot Password Block
    - Sends reset link to user but does not show if email does not exist for security reasons

*/

export const  ForgotsPassword  = async (UserEmail)  =>
{
   if(IsEmpty(UserEmail) === true)
   {
        alert("Please enter an email address");
   }
   else
   {

}
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
    if(PasswordMatch(PWD,CFPWD))
    {
    if(IsEmpty(PWD) &&IsEmpty(CFPWD) && IsEmpty(EML) && IsEmpty(USRName))
    {   
        
        createUserWithEmailAndPassword(SetUpUsers(),EML,PWD).then((userCredential) =>
    {
        alert("New user created");
    }).catch((error) => 
    {
        console.log(error.message);
    });
    }
}
else
{
    alert("both passwords must match");
}
     
}


//--------------------------------------------------------------------//



