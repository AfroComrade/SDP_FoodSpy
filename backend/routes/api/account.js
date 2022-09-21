const express = require('express');
const router = express.Router();

const firestore = require('../../firebase/firestore');

//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
/*import { getAuth,createUserWithEmailAndPassword,
    sendPasswordResetEmail, signInWithEmailAndPassword, 
    onAuthStateChanged,signOut} from "firebase/auth";*/


/*
    Variable block
*/


//const DB = connectDB();
//const Auth = getAuth(DB);

//--------------------------------------------------------------------//

/*

    Validation Block
    -  IsEmpty will identify if  input contains values or not. Returns true if empty
    -  IsPassword will identify if the password matches our terms.Returns true if meets terms
    -  PasswordMatch will identify if the password matches the confirmed password. Returns false if they do not match

*/
/*
try {
    const con = await fetch("http://localhost:3000/backend/config/db");
} 
catch (error) 
{
    alert(error);
}*/

/*

router.post('/user', (req,res) => {
    createAccount(req.body);
});

const connectDB = require('../../backend/config/db');
var db = "";
connectDB().then(res=>{db = res});*/
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


/*

    User Creation Block
    - User is to be created with username, DOB, email, Password and confirm password params.
    
*/


async function UserCreate  (EML,PWD,CFPWD,DOB,USRName)
{
   if(CheckUserName(USRName) === false)
   {
        var ErrMsg = "Username is already taken";
        console.log(ErrMsg);
   }
   else
   {
   try {
    if((IsEmpty(PWD) === false) && (IsEmpty(CFPWD) === false) &&(IsEmpty(EML) === false) &&(IsEmpty(DOB) === false) && (IsEmpty(USRName) === false))
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
        console.log(ErrMsg);
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


/*

    User Login Block

*/


async function Login (EML,PWD) {
    
    try 
    {
        if(IsEmpty(EML) === true)
        {
            console.log("Cannot login");
        }
        else
        {
            //To login
               const USR = await signInWithEmailAndPassword(Auth,EML,PWD);
            console.log(USR);
        
            //Navigate to next page.
        }
     
            
        
    } 
    catch (error) 
    {
        console.log(error.message);
    }
}


//--------------------------------------------------------------------//


/*

    Forgot Password Block
    - 

*/

async function ForgotPassword  (UserEmail) 
{
    try 
    {
        /*sendPasswordResetEmail(Auth,UserEmail).then(() =>{
            //Send out password reset email.
        });*/
    } 
    catch (error) 
    {
        console.log(error.code + "  "+ error.message);     
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
//router.use('/yolo', (req, res) => res.send('product routing test'));
router.use('/test', (req, res) => res.send('product route test'));

router.use('/eml/:id',(req,res) => {
    EML = req.params.id;
    res.send(EML);
});

router.post('/yolo/', (req, res) =>{
    string = req.params.id;
    console.log(typeof string);
});


module.exports = router;
