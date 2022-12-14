import React, {useEffect, useState}  from "react";
import {useParams} from 'react-router-dom';
import styled from "styled-components";

import {Link} from 'react-router-dom';
import RecipeError from "../components/RecipeError";

//This page generates the recipes from the chosen cuisine on the chooseCuisine page
function CuisineRecipes(){ 
    
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    try{

    // uses the API to find recipes that include the particular cuisine tag(Thai, Chinese, Indian, Korean)
    const getSearched = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${params.cuisine}&number=10`
        );
        const recipes = await api.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    },[params.search]);

    // Gets the Cuisine type and stores it for the heading at the top of the page
    let title = params.cuisine;
    title = title.charAt(0).toUpperCase() + title.slice(1);
    
    // Generates the display, using searchedRecipes to map recipes to clickable cards, which will take the user to the Recipe page. 
    return (
    <><div style={{
        paddingTop: '25px',
    }}>
            <h3>{title} Results</h3>
        </div><Grid>
                {searchedRecipes.map((recipe) => {
                    return (
                        <Card key={recipe.id}>
                            <Link to ={'/recipe/' + recipe.id}>
                            <img src={recipe.image} alt={recipe.title} />
                            <h4>{recipe.title}</h4>
                            </Link>
                        </Card>
                    );
                })}
            </Grid></>
    );
            }
            catch{
                <RecipeError />
            }
}

// Generates the display settings for Grid, Card, imgs, headings etc.
// Known issue is when only 1 card is displayed, it takes up the whole page and stretches out the screen, which will need to be fixed in Sprint 2.

const Grid = styled.div`
    display: grid;
    top: 5%;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
        color: black;
    }`;

export default CuisineRecipes;