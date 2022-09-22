import React, {useEffect, useState}  from "react";
import {useParams} from 'react-router-dom';
import styled from "styled-components";
import Search from "../components/SearchRecipe";
import {Link} from 'react-router-dom';

//This page renders the Search Results from the SearchRecipe Functions
function Searched(){ 

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();


    // uses the API to find recipes including the name passed through (eg. Steak, Apples etc.)
    const getSearched = async (name) => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        );
        const recipes = await api.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    },[params.search]);


    // Generates the display, using searchedRecipes to map recipes to clickable cards, which will take the user to the Recipe page. 
    return (
    <><div>
            <Search />
            <h3>Search Results</h3>
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

export default Searched;