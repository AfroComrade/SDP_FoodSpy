import React from "react";

import Popular from "../components/popularRecipes";
import "../App.css";
import Search from "../components/Search";

function RecipeDatabase() {
    return(
        <div>
          <Search />
          <Popular />
        </div>
    );
}

export default RecipeDatabase;