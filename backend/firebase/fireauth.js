const firebase = require('../config/db');
//const FSB = require("firebase/app");
const fireauth = require("firebase/auth");
const { async } = require('@firebase/util');
var auth = "";
var FireB = "";
firebase.goFB.then(res=>{FireB = res});
firebase.fireauth.then(res=>{auth = res});
var db = "";
//var auth = "";
firebase.firestore.then(res=>{db = res})
const {sendPasswordResetEmail ,createUserWithEmailAndPassword ,  signInWithEmailAndPassword, signOut } = require("firebase/auth");
const { collection,setDoc, query, where,doc, getDocs,getDoc, QuerySnapshot, addDoc } = require("firebase/firestore");

//----------------------------------------------------------------------------------//

/* 

Logs user into foodspy with their inputted Email and password.

*/

async  function LOGIN(EMAIL,PASSWORD)
{
  try 
  {
   return await   signInWithEmailAndPassword(auth,EMAIL,PASSWORD).then((UserCredential)=>{
       const User = UserCredential.user;
       console.log("User is now logged in!!");

       return User;
     }).catch((error)=>{
       console.log(error.code + ": " + error.message);
       return null;
     })
  } 
  catch (error) 
  {
   console.log(error.code + ": " + error.message);

  }
}

/* 

Sends reset email to user if they have account set up with foodspy.

*/

 async function ForgotPassword(Email)
{
  try 
  {
    return await  sendPasswordResetEmail(auth,Email).then((USR) =>
    {
        console.log("Reset email sent successfully!!");
        return USR.data;

    }).catch((error)=>{
        console.log(error.code + ": " + error.message);
        Check = 0;
        return null;
    })
  } 
  catch (error) 
  {
    return null;
  }
}

/*

Creates user in the firebase authentication, then begins creating username with uid.

*/

async  function CreateUser(Email,Password,NAME)
{
  try 
  {
     return await createUserWithEmailAndPassword(auth,Email,Password).then((userCredentials) =>{
        const USR = userCredentials.user;
        CreateUserName(NAME,USR.uid);
    }).catch((error) =>{
      console.log(error.code +": " +error.message);
    });
  } 
  catch (error) 
  {
    console.log(error.code +": " +error.message);
    return null;
  }
}

/*

Signs user out when requested, only if user is signed in.

*/


  function SignOut()
{
  signOut(auth).then(() =>{
    console.log("User logged out");
  }).catch((error) =>{
    console.log(error.code + ": " + error.message);
  });
}

/*

Inputs username into firestore table Userdetails with user id aswell

*/

async function CreateUserName(UserName,UISR)
{
  try 
  {
    console.log("inputting username.");
    const ref = doc(FireB, "UserDetails",UserName).withConverter(USERConverter);
    await setDoc(ref, new USER(UISR, UserName)).then((ITPM) =>{
      return ITPM.data;
    }).catch((error) =>{
      console.log(error.code +": " +error.message);
      return null; 
    });    

  } 
  catch (error)
   {
    console.log(error.code + ": " + error.message);

  }
}


/*

Checks the firestore table UserDetails for any other user under the inputted UserName

*/

async function CheckUserNameAvailability(UserName)
{
  const R = doc(FireB,"UserDetails",UserName);
  const Docs = await getDoc(R);
  if(Docs.exists())
  {
    console.log('Found');
      return true;
  }
  else
  {
      console.log('Not found:');
      return false;
  }
}


/*


*/


async function ReturnUserID()
{
   const user = auth.getcurrentUser;
   if(user)
   {
    console.log(user.uid);

   }
   else
   {
    console.log("No user is logged in");
   }
}





//----------------------------------------------------------------------------------//

/*


*/

class USER {
  constructor(UID,UserName)
  {
      this.UID = UID;
      this.UserName = UserName;
  }
  toString()
  {
    return this.UID + " " + this.UserName;
  }
}


const USERConverter = {
  toFirestore: (USR) =>{
    return{
      UID : USR.UID,
      UserName: USR.UserName
    };
  },
  fromFirestore: (snapshot, options) =>{
    const DTD = snapshot.data(options);
    return new USER(DTD.UID,DTD.UserName);
  }
};

//----------------------------------------------------------------------------------//


module.exports.ForgotPassword = ForgotPassword;
module.exports.CreateUser = CreateUser;
module.exports.LOGIN = LOGIN;
module.exports.SignOut = SignOut;
module.exports.CheckUserNameAvailability = CheckUserNameAvailability;
module.exports.CreateUserName = CreateUserName;
module.exports.ReturnUserID = ReturnUserID;