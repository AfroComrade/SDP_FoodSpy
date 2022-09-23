import React from "react";

import Popular from "../components/popularRecipes";
import Search from "../components/SearchRecipe";

function RecipeDatabase() {
    return(
        <div>
          <Search />
          <Popular />
        </div>
    );
}

export default RecipeDatabase;