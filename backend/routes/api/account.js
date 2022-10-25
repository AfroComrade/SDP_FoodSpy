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

router.use('/forgotpassword/:id',(req,res) => {
    
    var emails = req.params.id;
   
    
    
    FIREAUTHS.ForgotPassword(emails).then(function(result)
    {
        const msg = {
            value: ""
        }
        if(result != null)
        {
            msg.value = "Request Sent";
            res.send(msg);
        }
        else
        {
            msg.value = null;
            res.send(msg);
        }
        
    }
    );
    
    
    });

router.use('/UserId/',(req,res) =>{

    FIREAUTHS.ReturnUserID();
    //Main purpose is to return User ID.

    //FIREAUTHS.testFstore();
});


router.post('/Login',(req,res) =>{
    
    var input = req.body;
    
    //console.log(JU);
    FIREAUTHS.LOGIN(input.E,input.P).then(function(result)
    {
        
            const msg = {
                value: ""
            }
            if(result != null && RT != null)
            {
                msg.value = "Request Sent";
                res.send(msg);
            }
            else
            {
                msg.value = null;
                res.send(msg);
            }
        
       
    }
    );
   
    

});


router.post('/CreateUser', (req, res) =>
{
 
    var input = req.body;
    if(!IsEmpty(input.P) || !IsEmpty(input.CP) || !IsEmpty(input.E) || !IsEmpty(input.UN))
    {
        console.log("Empty Fields");
        
    }
    else
    {
        if(PasswordMatch(input.P,input.CP))
        {
            if(IsPassword(input.P) == 0)
            {
                console.log("weak password");
                console.log(IsPassword(input.P));
            }
            else
            {
                if(FIREAUTHS.CheckUserNameAvailability(input.UN) == true)
                {
                    console.log("Username has been taken");
                }
                else
                {
                    FIREAUTHS.CreateUser(input.E,input.P,input.UN).then(function(result)
                    {
                        console.log(result);
                        FIREAUTHS.CreateUserName(result,input.UN).then(function(RST){
                            const msg = {
                                value: ""
                            }
                            if(result != null && RST != null)
                            {
                                msg.value = "Request Sent";
                                res.send(msg);
                            }
                            else
                            {
                                msg.value = null;
                                res.send(msg);
                            }


                        });
                        
                    });

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

