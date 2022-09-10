const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8082;
app.use(cors({ origin: true, credentials: true}));
app.use(express.json({ extended: false}));

app.get('/', (req, res) => res.send('Hello world!'));
app.listen(port, () => console.log(`Server running on port ${port}`));

const products = require('./routes/api/products');

app.use('/api/products', products);

/*
https://sdpfoodspy.herokuapp.com/ | https://git.heroku.com/sdpfoodspy.git
*/

/*
app.use('/products/:id', (req, res) => {
    getItem(req.params.id)
    .then(data => {res.send(data)})
    .catch(err=> {
        console.log(err);
        res.send(err)
    });
    //getItem('180 Degrees 4 Seed Oat Crackers Cumin 135g').then(data => {res.send(data)});
});*/