const fb = require('firebase-admin');
const config = require('config');
const { initializeApp } = require("firebase/app");
const { getAuth }  = require("firebase/auth");
const { getFirestore } = require("firebase/firestore");
require('dotenv').config();

//----------------------------------------------------------------------------------//

//Service Account: Firebase Admin
var serviceAcc2 = new Object();
serviceAcc2.type = process.env.TYPE;
serviceAcc2.project_id = process.env.PROJECT_ID;
serviceAcc2.private_key_id = process.env.PRIVATE_KEY_ID;
serviceAcc2.private_key = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');
serviceAcc2.client_email = process.env.CLIENT_EMAIL;
serviceAcc2.client_id = process.env.CLIENT_ID;
serviceAcc2.auth_uri = process.env.AUTH_URL;
serviceAcc2.token_uri = process.env.TOKEN_URL;
serviceAcc2.auth_provider_x509_cert_url = process.env.AUTH_PROVIDER_X509_CERT_URL;
serviceAcc2.client_x509_cert_url = process.env.CLIENT_X509_CERT_URL;

init = false;

//Firebase basic auth
var Firebase_OBJ = new Object();
Firebase_OBJ.APIKEY = process.env.API_KEY;
Firebase_OBJ.AUTHDOMAIN = process.env.AUTHDOMAIN;
Firebase_OBJ.PROJECT_ID = process.env.PROJECTID;
Firebase_OBJ.STORAGEBUCKET = process.env.STORAGEBUCKET;
Firebase_OBJ.MESSAGINSENDERID = process.env.MESSAGINGSENDERID;
Firebase_OBJ.APPID = process.env.APPID;
Firebase_OBJ.MEASUREMENTID = process.env.MEASUREMENTID;

const firebaseConfig = {
    apiKey: Firebase_OBJ.APIKEY ,
    authDomain: Firebase_OBJ.AUTHDOMAIN,
    projectId: Firebase_OBJ.PROJECT_ID ,
    storageBucket: Firebase_OBJ.STORAGEBUCKET ,
    messagingSenderId: Firebase_OBJ.MESSAGINSENDERID ,
    appId: Firebase_OBJ.APPID,
    measurementId: Firebase_OBJ.MEASUREMENTID 
  };

const FireB = initializeApp(
    firebaseConfig
)

//----------------------------------------------------------------------------------//

/* 

Functions



*/

async function connectFB() {
    if (!init)
    {
        fb.initializeApp({
            credential: fb.credential.cert(serviceAcc2)
        });
        init = true;
    }
    console.log('firebase initialized');
}

async function connectDB() {
    connectFB();
    const db = fb.firestore();
    console.log('firestore connected');
    return db
}

async function connectAuth()
{
    console.log("firebase_obj");
    console.log(Firebase_OBJ);
    const Auth = getAuth(FireB);
    console.log("firebase auth connected");
    return Auth;
}

async function TestFirestore()
{
    const FB = getFirestore(FireB);
    return FB;
}

//----------------------------------------------------------------------------------//





module.exports = 
{
    fb: connectFB(),
    goFB: TestFirestore(),
    firestore: connectDB(),
    fireauth: connectAuth(),
}

//----------------------------------------------------------------------------------//