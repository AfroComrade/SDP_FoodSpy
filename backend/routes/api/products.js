const express = require('express');
const router = express.Router();

const firestore = require('../../firebase/firestore');

// We're going to use the list of items saved from the scraper
const itemstxt = 'scripts/firebase/items.txt';
var fs = require('fs');

/*  GetMatches()
    Input: String of words searched on the front end
    Output: Array of JSONs that contain all words from the given string

    This works by taking in 'item lines' from the items.txt. Each line is an item searchable on firebase
    For each 'word' in the search string, check that it exists in the item line. 
    If all words exist in the item line, add it to a list of 'items found' that will then be retrieved from firebase
*/
async function getMatches(res, inputString) {
    let returnItemJsons = [];
    
    //  Read in the 'item lines' from firebase
    fs.readFile(itemstxt, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        // Split each line from items.txt into a separate entry
        itemLines = data.split('\n');

        // Split the input string into individual words
        words = inputString.split(' ');

        // Create an array of found items
        foundItems = [];
        
        for (let e = 0; e < itemLines.length; e++) 
        {

            let found = true;
            for (let i = 0; i < words.length; i++)
            {
                // If we ever find that a word is not in the item lines, just move on to the next item line
                if (!itemLines[e].toLowerCase().includes(words[i].toLowerCase())) {
                    found = false;
                    break;
                }
            }

            if (found)
            {
                foundItems.push(itemLines[e]);
                // The below code is used when testing locally
                //foundItems.push(itemLines[e].slice(0, -1));
            }
        }

        let promises = [];
        
        // For each item found, make a request to firestore 'items' database to retreive said item then add it to the return Items
        for (let e = 0; e < foundItems.length; e++){
            console.log(foundItems[e]);
            promises.push(firestore('items', foundItems[e])
                .then(data => {
                    returnItemJsons.push(data)
                })
            );
        }

        // Wait until all requests have been made, then return the found items with the response
        Promise.all(promises).then(() => {
            res.send(returnItemJsons);
        });
    });
}


router.use('/test', (req, res) => res.send('product route test'));

router.use('/product/:id', (req, res) => {
    console.log(req.params.id);
    firestore('items', req.params.id)
    .then(data => {res.send(data)})
    .catch(err=> {
        console.log(err);
        res.send(err)
    });
});

router.use('/search/:id', (req, res) =>{
    console.log("search", req.params.id)
    string = req.params.id;
    getMatches(res, string)
});


module.exports = router;

// http://localhost:8082/api/products/product/180%20Degrees%204%20Seed%20Oat%20Crackers%20Cumin%20135g
// http://localhost:8082/api/products/search/chocolate%20whittakers%20creamy