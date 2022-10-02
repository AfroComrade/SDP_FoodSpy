const fb = require('firebase-admin');
const config = require('config');
require('dotenv').config();

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
    connectFB();
    const auth = fb.auth();
    console.log("firebase auth connected");
    return auth;
}

module.exports = 
{
    firestore: connectDB(),
    fireauth: connectAuth(),
}