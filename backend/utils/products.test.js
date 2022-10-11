const axios = require('axios');
const core = require('@actions/core');

url1 = "http://sdpfodspy.herokuapp.com/api/products/product/Ace%20Gloves%20Small";
url2 = "http://sdpfoodspy.herokuapp.com/api/products/product/Ace%20Gloves%20Small";
url3 = "http://sdpfoodspy.herokuapp.com/api/products/product/Ace%20Gloves%20Smal";
let successful;

async function testCall(url) {
    successful = false
    try {
        promise = await axios.get(url)
        .then(res => {
            data = res.data;
            successful = false;
            console.assert(data.imageURL === 'https://assets.woolworths.com.au/images/2010/671469.jpg?impolicy=wowcdxwbjbx&w=1200&h=1200');
            if (data.product === 'Ace Gloves Small')
            {
                successful = true;
            }
    }).catch((error) => {
        {
            if (url !== url1)
            {
                console.log("error for " + url);
                console.log(error);
            }
        }
    })
    } catch (error) {
        console.log("Outer loop failed");
        console.log(error);
    }
}

//const succeeded = testCall(url1);

async function assertCheck(url, expectedResponse) {
    console.log("testing " + url);
    testCall(url).then(() => {
        if (expectedResponse !== successful)
        {
            console.log("expected response vs successful response incorrect!");
            console.log(url);
            console.log(expectedResponse);
            console.log(successful);
            throw "unit test failed!";
        }
        return;
    })
    .catch((e) =>
    {
        core.setFailed(e);
        return;
    })
}

assertCheck(url1, false)
.then(assertCheck(url2, true)
.then(assertCheck(url3, true))
.then(console.log("product tests completed")));
