const express = require('express');
const router = express.Router();

const connectDB = require('../../config/db');
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

async function getAll() {
    return await db.collection()
}

router.get('/test'), (req, res) => res.send('product route test');

router.use('/all', (req, res) => {

})

router.use('/cheapest/:id', (req, res) =>{
    string = req.params.id;
});

router.use('/:id', (req, res) => {
    getItem(req.params.id)
    .then(data => {res.send(data)})
    .catch(err=> {
        console.log(err);
        res.send(err)
    });
});

module.exports = router;