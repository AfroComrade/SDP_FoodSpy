const express = require('express');
const router = express.Router();
const config = require('config');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
let FireB ="";
const firebases = require("../../config/db")
const FIREAUTHS = require('../../firebase/fireauth');

/*
    Variable block
*/


//--------------------------------------------------------------------//

/*

    Validation Block
    -  IsEmpty will identify if  input contains values or not. Returns true if empty
    -  IsPassword will identify if the password matches our terms.Returns true if meets terms
    -  PasswordMatch will identify if the password matches the confirmed password. Returns false if they do not match

*/

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
   
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    if(strongPassword.test(Password))
    {
        console.log("Strong stength password");
        return 2;
    }
    else if(mediumPassword.test(Password))
    {
        console.log("Medium stength password");
        return 1;

    }
    else
    {
        console.log("Weak password");
        return 0;

    }

}

async function PasswordMatch (originalPassword,ConfirmPassword) 
{
    if(originalPassword == ConfirmPassword)
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
    
}


async function InputUserName(ID,USRNAME)
{

}


//--------------------------------------------------------------------//

/*

    User Login Block

*/

async function Login (EML,PWD) 
{
    try 
    {
        
    } 
    catch (error) 
    {
        
    }
}


//--------------------------------------------------------------------//


/*

    Forgot Password Block
    - 

*/



//--------------------------------------------------------------------//


/*   
    Sign out
*/

async function Signout()
{
    try 
    {
        
    } 
    catch (error) 
    {
        
    }
}

//--------------------------------------------------------------------//

/*

    Get User Details

*/

async function GetUser()
{

}


//--------------------------------------------------------------------//

/*

    Server Side functions

*/

router.post('/test', function requestHandler(req, res) {
    res.end('Hello, World!');
});

/*
    var user_name = req.body.user;
    var password = req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    res.end("yes");
     */

router.use('/ForgotPassword/',(req,res) => {
    FIREAUTHS.ForgotPassword("BOOBS@BOOBIES.com");
    
    
    
});


router.use('/UserId/',(req,res) =>{

    FIREAUTHS.ReturnUserID();
    //Main purpose is to return User ID.

    //FIREAUTHS.testFstore();
});

//Email and password have been hard coded, need to set up inputting via POST
//Login will activate the login function in fireauth
router.use('/Login/',(req,res) =>{

    

    FIREAUTHS.LOGIN("email@email.com","Idonknow3!");
    

});


router.use('/CreateUser/', (req, res) =>
{
    var PWD = "Idonknow3!";
    var CPW = "Idonknow3!";
    var EML = "NJY@aut.com";
    var USR = "Goforit";

    if(!IsEmpty(PWD) || !IsEmpty(CPW) || !IsEmpty(EML))
    {
        console.log("Empty Fields");
        
    }
    else
    {
        if(PasswordMatch(PWD,CPW))
        {
            if(IsPassword(PWD) == 0)
            {
                console.log("weak password");
                console.log(IsPassword(PWD));
            }
            else
            {
                if(FIREAUTHS.CheckUserNameAvailability(USR) == true)
                {
                    console.log("Username has been taken");
                }
                else
                {
                    console.log("Works");
                    FIREAUTHS.CreateUser(EML,PWD,USR);

                }
            }
        }
        else
        {
            console.log("Passwords Must Match");
        }
    }
    console.log("User has now been created");
});

router.use('/SignOut/',(req,res) =>{
    FIREAUTHS.SignOut();
});


//--------------------------------------------------------------------//

module.exports = router;
