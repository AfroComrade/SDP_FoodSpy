const express = require('express');
const router = express.Router();

const connectDB = require('../../config/db');
var db = "";
connectDB().then(res=>{db = res});

const itemstxt = 'scripts/firebase/items.txt';
var fs = require('fs');

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
};

async function getMatches(res, string) {
    let objects = [];
    
    fs.readFile(itemstxt, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        list = data.split('\n');
        words = string.split(' ');

        founds = [];
        
        for (let e = 0; e < list.length; e++) {
            found = [words.length];
            for (let i = 0; i < words.length; i++)
            {
                if (list[e].toLowerCase().includes(words[i].toLowerCase())) {
                    found[i] = true;
                }
                else
                {
                    found[i] = false;
                }
            }

            allfound = true;
            for (let i = 0; i < words.length; i++)
            {
                if (!found[i])
                    allfound = false;
            }
            
            if (allfound)
            {
                founds.push(list[e].slice(0, -1));
            }
        }
        

        let promises = [];

        for (let e = 0; e < founds.length; e++){
            console.log(founds[e]);
            promises.push(getItem(founds[e])
                .then(data => {
                    objects.push(data)
                })
            );
        }

        Promise.all(promises).then((values) => {
            res.send(objects);
        });
    });
}


router.use('/test', (req, res) => res.send('product route test'));

router.use('/product/:id', (req, res) => {
    console.log(req.params.id);
    getItem(req.params.id)
    .then(data => {res.send(data)})
    .catch(err=> {
        console.log(err);
        res.send(err)
    });
});

router.use('/search/:id', (req, res) =>{
    string = req.params.id;
    getMatches(res, string)
});


module.exports = router;

// http://localhost:8082/api/products/product/180%20Degrees%204%20Seed%20Oat%20Crackers%20Cumin%20135g
// http://localhost:8082/api/products/search/chocolate%20whittakers%20creamy