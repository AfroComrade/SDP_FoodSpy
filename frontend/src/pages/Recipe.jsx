import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";


// This file makes the page viewed whenever a User clicks into a Recipe, breaking it down into
// three different sections, being a summary, instructions, and ingredients, with an image on 
// the left hand side to show the user the dish being made. A few issues here is if the summary
// includes links to other recipes, it cannot redirect as that leads to Spoonacular. Also if there is
// no image stored in the Spoonacular API for a recipe, it can look kind of bland, however these issues
// right now are not impeding progress, and may be a stretch thing to try and address during Sprint 2.

function Recipe(){

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("summary");

    // Fetches the recipe from the API using it's name and the API key obtained by our account.


    useEffect(() => {
        const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    };
        fetchDetails()
    }, [params.id]);


    // DetailWrapper that houses all the content for the page, with a few buttons and activeTabs to allow users to click between and view different
    // information about the recipe. Using the the const details declared above, we are able to pull through different parts of the recipe using the
    // different variable names.
    
    return <DetailWrapper>
    
        <div>
            <h1>{details.title}</h1>
            <img src={details.image} alt={details.title}/>
        </div>
        <Info>
            <Button className={activeTab === 'summary' ? 'active' : ''} onClick={() => setActiveTab('summary')}>Summary</Button>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
            {activeTab === 'summary' && (
                <div>
                    <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                </div>
            )}
            {activeTab === 'instructions' && (
            <div>
                <h2 dangerouslySetInnerHTML={{__html: details.instructions}}></h2>
            </div>) }
            {activeTab === 'ingredients' && (            
            <ul>
                {details.extendedIngredients.map((ingredient) => 
                    <li key={ingredient.id}>{ingredient.original}</li>
                )}
            </ul>)}         
        </Info>
    </DetailWrapper>
    
}

// Sets the display settings for a variety of different features used throughout the page, including imag, active, headings, lists etc.

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    img{
        border-radius: 2rem;
        left: 10;
        width: 100%
        height: 100%
        object-fit: cover;
    }

    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2{
        margin-bottom: 2rem;
        font-size: 1.2rem;
        text-align: center;
        background-color: #A5A692;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
        background-color: #A5A692;
        text-align: center;
        right: 10;
    }
    ul {
        margin-top: 2rem;
        background-color: #A5A692;
    }
    p {
        background-color: #A5A692;
    }
`;

// Sets the style of Buttons and Info tags that are used on the page.

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white; 
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;   
`;

export default Recipe;