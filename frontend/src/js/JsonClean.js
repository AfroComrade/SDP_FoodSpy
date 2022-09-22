

const  LoadResults = async () =>
{
    var URL = ConcatURL(Input);
    try {
        const Y = await fetch(URL).then(res => res.json());
       console.log(Y);
       } 
       catch (error) {
            console.log(error);
       }


}


function containsWhitespace(str) {
    return /\s/.test(str);
  }

function ConcatURL(searchItm)
{
    if(containsWhitespace() === false)
    {
        var link ='https://sdpfoodspy.herokuapp.com/api/products/search/';
        var combinedLink = "";
        var finalLink = combinedLink.concat(link,searchItm);
        console.log(finalLink);
        return finalLink;  
    }
    else
    {
        var link ='https://sdpfoodspy.herokuapp.com/api/products/search/';
        var combinedLink = "";
        var finalLink = combinedLink.concat(link,'%20',searchItm);
        console.log(finalLink);
        return finalLink;  

    }
}
