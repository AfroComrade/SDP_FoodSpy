const axios = require('axios');

url1 = "http://sdpfodspy.herokuapp.com/api/products/product/Ace%20Gloves%20Small";
url2 = "http://sdpfoodspy.herokuapp.com/api/products/product/Ace%20Gloves%20Small";
let successful;

async function testCall(url) {
    let promise;
    successful = false
    try {
        promise = await axios.get(url)
        .then(res => {
            data = res.data;
            console.assert(data.imageURL === 'https://assets.woolworths.com.au/images/2010/671469.jpg?impolicy=wowcdxwbjbx&w=1200&h=1200');
            if (data.product === 'Ace Gloves Small')
            {
                successful = true;
            }
    }).catch((error) => {
        {
            console.log("axios error");
        }
    })
    } catch (error) {
        //assert.isNotOk(error, 'Error');
        //console.log(error);
        console.log("Outer loop failed");
    }

        //Promise.resolve(promise).then(() => {
        //return successful;
    //});
}

//const succeeded = testCall(url1);

async function assertCheck(url, expectedResponse) {
    console.log("testing " + url);
    testCall(url).then(() => {
        console.log(successful);
        console.log(expectedResponse)
        console.assert(expectedResponse === successful);
        return;
    })
}

//assertCheck(url1, false).then(assertCheck(url2, true));
assertCheck(url1, true);
//;