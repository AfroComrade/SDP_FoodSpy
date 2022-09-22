import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe(){

    document.body.style.background = "#A5A692";

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

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
        font-size: 8;
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
`;

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