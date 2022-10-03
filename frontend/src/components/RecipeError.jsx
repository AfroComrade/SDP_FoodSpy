import React from "react";

//The purpose of this function is to give the user a prompt that the Spoonacular API is currently having issues, so that website doesn't completely break if there is an error.

function RecipeError() {
    return(
        <div style={{
            paddingTop: "10px",
            alignContent: "center",
            textAlign: "center"
        }}>
        <h1>Error reaching Spoonacular API, please try again later</h1>
        </div>
    );
}


export default RecipeError;