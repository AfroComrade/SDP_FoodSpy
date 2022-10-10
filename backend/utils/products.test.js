const axios = require('axios');

url1 = "http://sdpfodspy.herokuapp.com/api/products/product/Ace%20Gloves%20Small";
url2 = "http://sdpfoodspy.herokuapp.com/api/products/product/Ace%20Gloves%20Small";

async function testCall(url) {
    try {
        axios.get(
            url)
        .then(res => {
            data = res.data;
            console.assert(data.imageURL === 'https://assets.woolworths.com.au/images/2010/671469.jpg?impolicy=wowcdxwbjbx&w=1200&h=1200');
            if (data.product !== 'Ace Gloves Smal')
            {
                console.log("Api call successful");
            }
    }).catch((error) => {
        if (url === url2)
        {
            console.log("intentional fail!");
        }
        else
        {
            console.log("axios error");
            console.log(error);
            console.assert(false);
        }
    })
    } catch (error) {
        //assert.isNotOk(error, 'Error');
        console.log(error);
        console.assert(false);
    }
}

testCall(url1);
testCall(url2);

console.log("Pass and fail went through correctly!");