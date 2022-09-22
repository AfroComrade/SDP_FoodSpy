import {SetUpUsers} from '../../config/Firebase';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail  } from "firebase/auth";

async function IsEmpty (Input){
    
    if(Input.length === 0)
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


export const Login  = async (EML,PWD)  => 
{
    if((IsEmpty(EML) === true) || (IsEmpty(PWD) === true))
   {
        alert("Please enter an email address  and password");
   }
   else
   {
    console.log("StartUSR");
    try 
    {

            //const auth = ;        
            const USR = await signInWithEmailAndPassword(SetUpUsers(),EML,PWD);
            console.log(USR);
            alert("User:" + EML + " is now logged in");
        
    } 
    catch (error) 
    {
        console.log(error.message);
    }
}


/*

    Forgot Password Block
    - 

*/

export const  ForgotsPassword  = async (UserEmail)  =>
{
   if(IsEmpty(UserEmail) === true)
   {
        alert("Please enter an email address");
   }
   else
   {
    try 
    {
        const auth = SetUpUsers();   
        sendPasswordResetEmail(auth,UserEmail).then(() =>
        {
            //Send out password reset email.
            alert("Reset password link has been sent");
        });
    } 
    catch (error) 
    {
        console.log(error.code + "  "+ error.message);     
    }
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
        /*Signout(Auth).then(() =>{
            /* 
                Sign out successfull
                exit out user
            
            
        }).catch((error) =>{
            console.log(error.message)
        });*/
    } 
    catch (error) 
    {
        console.log(error.message);
    }
}

//--------------------------------------------------------------------//

/*

    User Creation Block
    - User is to be created with username, DOB, email, Password and confirm password params.
    
*/


async function UserCreate  (EML,PWD,CFPWD,USRName)
{
   if(CheckUserName(USRName) === false)
   {
        var ErrMsg = "Username is already taken";
        alert(ErrMsg);
   }
   else
   {
   try {
    if((IsEmpty(PWD) === false) && (IsEmpty(CFPWD) === false) &&(IsEmpty(EML) === false) && (IsEmpty(USRName) === false))
    {
        if(PasswordMatch(PWD,CFPWD) === false)
        {
            /*
            //Create new Firebase user 
            createUserWithEmailAndPassword(Auth,EML,PWD).then((userCredential) =>
            {
                const user = userCredential.user;
                const ID = user.uid;
                 //Firestore enter in new user
                 //InputUserName(ID,USRName)

            }).catch((error) => 
            {
                console.log(error.message);
            });*/

        }
    }
    else
    {   
        var ErrMsg = "All fields must be filled in before creating a new account";
        alert(ErrMsg);
    }
   } catch (error) 
   {
        console.log(error.message); 
   }
}
}


async function InputUserName(ID,USRNAME)
{

}


//--------------------------------------------------------------------//