const firebase = require('../config/db');
var db = "";
var auth = "";
firebase.firestore.then(res=>{db = res});
firebase.fireauth.then(res=>{auth = res});

async function getItem(table, product) {
    return await db.collection(table).doc(product).get()
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

module.exports = getItem;