const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8082;
app.use(cors({ origin: true, credentials: true}));
app.use(express.json({ extended: false}));

const products = require('./routes/api/products');

app.use('/api/products', products);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname+'/../frontend/build'));
    app.get('*', (req,res) => {
        res.sendFile(__dirname+'/../frontend/build/index.html')
    });
    console.log("sup callum 2");
} else {
    //app.get('/', (req, res) => res.send(`API running on port ${port}`));
    console.log("sup callum");
}

//app.get('/', (req, res) => res.send('Hello world!'));
app.listen(port, () => console.log(`Server running on port ${port}`));


/*
https://sdpfoodspy.herokuapp.com/ | https://git.heroku.com/sdpfoodspy.git
*/