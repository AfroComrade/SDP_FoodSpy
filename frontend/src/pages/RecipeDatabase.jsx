import React from "react";

import Popular from "../components/popularRecipes";

// This file creates the Recipe Database page, which is clicked on Popular recipes on the website.
// It combines two components being popularRecipes and SearchRecipe into one page, allowing for tidier
// code.

function RecipeDatabase() {
    return(
       <> 
          <div style={{
            paddingBottom: '25px',
          }}>
          <Popular />
        </div> </>
    );
}

export default RecipeDatabase;