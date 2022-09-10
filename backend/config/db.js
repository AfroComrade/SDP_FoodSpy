const fs = require('firebase-admin');
//const serviceAccount = require('./foodspy-39b75-firebase-adminsdk-xjs48-8714375f78.json');
const config = require('config');

let key = process.env.PRIVATE_KEY;
var key2 = key.replace("\\\\n", '\n');

var serviceAcc2 = new Object();
serviceAcc2.type = process.env.TYPE;
serviceAcc2.project_id = process.env.PROJECT_ID;
serviceAcc2.private_key_id = process.env.PRIVATE_KEY_ID;
serviceAcc2.private_key = key2;
serviceAcc2.client_email = process.env.CLIENT_EMAIL;
serviceAcc2.client_id = process.env.CLIENT_ID;
serviceAcc2.auth_uri = process.env.AUTH_URL;
serviceAcc2.token_uri = process.env.TOKEN_URL;
serviceAcc2.auth_provider_x509_cert_url = process.env.AUTH_PROVIDER_X509_CERT_URL;
serviceAcc2.client_x509_cert_url = process.env.CLIENT_X509_CERT_URL;
var serviceAcc = JSON.stringify(serviceAcc2);
serviceAcc = serviceAcc.replace("\\\\n", '\n');

console.log(serviceAcc);

async function connectDB() {
    fs.initializeApp({
        credential: fs.credential.cert(serviceAcc)
    });
    const db = fs.firestore()
    console.log('firestore connected');
    return db;
}

module.exports = connectDB;