const fs = require('firebase-admin');
const serviceAccount = require('./foodspy-39b75-firebase-adminsdk-xjs48-8714375f78.json');
const config = require('config');

async function connectDB() {
    fs.initializeApp({
        credential: fs.credential.cert(serviceAccount)
    });
    //const db = fs.firestore();
    const db = fs.firestore()
    console.log('firestore connected');
    return db;
}

module.exports = connectDB;