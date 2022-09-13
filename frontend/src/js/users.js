

/*

    Validation Block

*/


const IsEmpty = (Input) => {
    if(Input === "")
    {
        return true;
    }
    return false;
}

const IsPassword = (Password) =>
{
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(Password.length >= 8)
    {
        if(lowerCaseLetters.value.match(Password) && upperCaseLetters.value.match(Password) && numbers.value.match(Password))
        {
            return true;
        }
    }
    return false;

}


//--------------------------------------------------------------------//