import React, {useEffect, useState}  from "react";
import {useParams} from 'react-router-dom';
import styled from "styled-components";
import SearchItems from "../components/SearchItems";
import {Link} from 'react-router-dom';


function SearchedItems(){ 

    const [searchedItems, setSearchedItems] = useState([]);
    let params = useParams();

    const getSearchedItems = async (name) => {
        const data = await fetch(
            `https://sdpfoodspy.herokuapp.com/api/products/search/${name}`
        );
        const items = await data.json();
        setSearchedItems(items.results);
    };

    useEffect(() => {
        getSearchedItems(params.search);
        console.log(getSearchedItems);
    },[params.search]);

    return (
    <><div>
            <SearchItems />
        </div><Grid>
                {searchedItems.map((items) => {
                    return (
                        <Card key={items.product}>
                            <Link to ={'/items/' + items.product}>
                            <img src={items.imageURL} alt={items.product} />
                            <h4>{items.product}</h4>
                            </Link>
                        </Card>
                    );
                })}
            </Grid></>
    );
}

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

export default SearchedItems;