const fs = require('firebase-admin');
//const serviceAccount = require('./foodspy-39b75-firebase-adminsdk-xjs48-8714375f78.json');
const config = require('config');

const serviceAcc2 = ({
    "type": process.env.TYPE,
    "project_id": process.env.PROJECT_ID,
    "private_key_id": process.env.PRIVATE_KEY_ID,
    "private_key": process.env.PRIVATE_KEY,
    "client_email": process.env.CLIENT_EMAIL,
    "client_id": process.env.CLIENT_ID,
    "auth_uri": process.env.AUTH_URL,
    "token_uri": process.env.TOKEN_URL,
    "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL
})

async function connectDB() {
    fs.initializeApp({
        credential: fs.credential.cert(serviceAcc2)
    });
    //const db = fs.firestore();
    const db = fs.firestore()
    console.log('firestore connected');
    return db;
}

module.exports = connectDB;