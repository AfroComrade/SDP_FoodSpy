const axios = require('axios');

async function testCall() {
    axios.get(
        'http://sdpfodspy.herokuapp.com/api/products/product/Ace%20Gloves%20Small')
    .then(res => {
        data = res.data;
        console.assert(data.imageURL === 'https://assets.woolworths.com.au/images/2010/671469.jpg?impolicy=wowcdxwbjbx&w=1200&h=1200');
        if (data.product !== 'Ace Gloves Smal')
        {
            console.log("Api call successful");
        }
})};

testCall();