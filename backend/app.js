const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8082;
app.use(cors({ origin: true, credentials: true}));
app.use(express.json({ extended: false}));

app.get('/', (req, res) => res.send('Hello world!'));
app.listen(port, () => console.log(`Server running on port ${port}`));



//const fs = require('firebase-admin');
//const serviceAccount = require('./config/foodspy-39b75-firebase-adminsdk-xjs48-8714375f78.json');

//fs.initializeApp({
//    credential: fs.credential.cert(serviceAccount)
//});
//const db = fs.firestore();


var db = "";
connectDB().then(res=>{db = res});

async function getItem(product) {
    return await db.collection('items').doc(product).get()
        .then(response => {
            if (!response.exists) {
                console.log('Not found:', product);
                return null;
            }
            else {
                return response.data();
            }
        })
}

//getItem('degree').then(data => {console.log(data)});

app.use('/product/:id', (req, res) => {
    getItem(req.params.id)
    .then(data => {res.send(data)})
    .catch(err=> {
        console.log(err);
        res.send(err)
    });
    
    //getItem('180 Degrees 4 Seed Oat Crackers Cumin 135g').then(data => {res.send(data)});
});