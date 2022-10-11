const axios = require('axios');
const core = require('@actions/core');

url1 = "http://sdpfodspy.herokuapp.com/api/products/product/Ace%20Gloves%20Small";
url2 = "http://sdpfoodspy.herokuapp.com/api/products/product/Ace%20Gloves%20Small";
url3 = "http://sdpfoodspy.herokuapp.com/api/products/product/Ace%20Gloves%20Smal";
let successful;


function main() {
    checkURLSucceeds(url1, "", false)
    .then(checkURLSucceeds(url2, "Ace Gloves Small", true)
    .then(checkURLSucceeds(url2, "Ace Gloves Smal", false))
    .then(checkURLSucceeds(url3, "", false)));
}

async function checkURLSucceeds(url, itemExpected, expectSuccess) {
    console.log("testing url: " + url);
    callLiveProductAPI(url, itemExpected).then(() => {
        compareExpectedVsActualResponse(url, expectSuccess);
    })
    .catch((e) =>
    {
        // Fail github action
        core.setFailed(e);
        return;
    })
}

function compareExpectedVsActualResponse(url, expectSuccess) {
    if (expectSuccess !== successful)
        {
            // Github action logging
            console.log("expected response vs successful response incorrect!");
            console.log(url);
            console.log(expectedResponse);
            console.log(successful);
            throw "unit test failed!";
        }
        return;
}

async function callLiveProductAPI(url, itemExpected) {
    successful = false
    try {
        promise = await axios.get(url)
        .then(res => 
            {
            checkDataIsCorrect(res.data, itemExpected);
        })
        .catch((error) => 
        {
        {
            handleError(url, error);
        }
    })} 
    catch (error) 
    {
        handleError(url, error);
    }
}

function checkDataIsCorrect(data, itemExpected) {
    successful = false;
    console.assert(data.imageURL === 'https://assets.woolworths.com.au/images/2010/671469.jpg?impolicy=wowcdxwbjbx&w=1200&h=1200');
    if (data.product === itemExpected)
    {
        successful = true;
    }
}

function handleError(url, error) {
    if (url !== url1)
    {
        console.log("error for " + url);
        console.log(error);
    }
}

main();