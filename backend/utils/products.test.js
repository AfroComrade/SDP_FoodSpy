const axios = require('axios');
const core = require('@actions/core');

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
        console.log("Outer loop failed");
    }
}

//const succeeded = testCall(url1);

async function assertCheck(url, expectedResponse) {
    console.log("testing " + url);
    testCall(url).then(() => {
        console.log(successful);
        console.log(expectedResponse)
        if (expectedResponse !== successful)
        {
            console.log("expected response vs successful response incorrect!");
            console.log(expectedResponse);
            console.log(successful);
            throw "unit test failed!";
        }
        return;
    })
    .catch((e) =>
    {
        core.setFailed(e);
    })
}

assertCheck(url1, false).then(assertCheck(url2, true));