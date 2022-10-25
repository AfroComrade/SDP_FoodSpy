import React, {useEffect, useState}  from "react";
import {useParams} from 'react-router-dom';
import styled from "styled-components";
import SearchItems from "../components/SearchItems";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function SearchedItems(){ 

    let locations = [
        "New World Devonport",
        "New World Howick",
        "New World Metro Auckland",
        "New World Shore City",
        "New World Stonefields",
        "New World Victoria Park",
        "PAK'nSAVE Blenheim",
        "PAK'nSAVE Hawera",
        "PAK'nSAVE Hornby",
        "PAK'nSAVE Kapiti",
        "PAK'nSAVE Kilbirnie",
        "PAK'nSAVE Lower Hutt",
        "PAK'nSAVE Masterton",
        "PAK'nSAVE Moorhouse",
        "PAK'nSAVE New Plymouth",
        "PAK'nSAVE Northlands",
        "PAK'nSAVE Petone",
        "PAK'nSAVE Porirua",
        "PAK'nSAVE Rangiora",
        "PAK'nSAVE Riccarton",
        "PAK'nSAVE Upper Hutt",
        "PAK'nSAVE Wainoni",
        "PAK'nSAVE Whanganui]"
    ];

    document.body.style.backgroundImage = '';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '1910px 950px';
    document.body.style.backgroundColor = '#2E7F72';
    document.body.style.backgroundPosition = 'center';

    const [searchedItems, setSearchedItems] = useState([]);
    let params = useParams();

    const getSearchedItems = async (name) => {
        console.log("hello1");
        console.log(name);
        const data = await fetch(
            `https://sdpfoodspy.herokuapp.com/api/products/search/${name}`
        );
        const items = await data.json();
        setSearchedItems(items);
        console.log(items);
    };

    useEffect(() => {
        getSearchedItems(params.searchitems);
        console.log(params.searchitems);
    },[params.searchitems]);

    const showItems = (item) => {
        const location = locations.map(store => {
            if (item[store] != null)
            {
                return(
                    <ListGroup.Item>{store}  ${item[store]}</ListGroup.Item>
                );
            }
        }
        );
        //let location2 = location;
        let found = false;
        for (let i = 0; i < location.length; i++)
        {
            if (location[i] != null)
            {
                found = true;
                break;
            }
        }
        if (!found)
        {
            return <ListGroup.Item>{item["location"]}  ${item["price"]}</ListGroup.Item>
        }
        else
        {
            return location;
        }
    };

    const cheapestItem = (item) =>
    {
        let cheapest = 100;
        if (item["price"] != null)
        {
            cheapest = item["price"];
        }
        
        for (let j = 0; j < locations.length; j++)
        {
            if (item[locations[j]] < cheapest)
            {
                cheapest = item[locations[j]];
            }
        }

        return cheapest
    }

    if(searchedItems.length > 0)
                    {
    return (
    <><div
        style={{
                paddingTop: '100px',
                paddingBottom: '50px',
                paddingLeft: '100px',
                paddingRight: '100px'
                
        }}>
            <SearchItems />
        </div><Grid style={{
                paddingTop: '50px',
                paddingBottom: '50px',
                paddingLeft: '100px',
                paddingRight: '100px'
                
        }}>
            
                {searchedItems.map((items) => {

                    
                    return (
                        <Card border="dark" key={items.product}  style={{ width: '18rem', borderWidth: '2px' }}>
                            <Card.Img src={items.imageURL} alt={items.product} />
                            <Card.Body>
                            <Card.Title>{items.product}</Card.Title>
                            <Card.Text style={{fontSize: '1.6rem', color: '#A72608', fontWeight: "bold", textAlign: "right" }}>From: ${cheapestItem(items)}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                {showItems(items)}
                            </ListGroup>
                        </Card>
                    );
                })}
            </Grid></>
    );}
    else{
        return(
        <h4>Item not found</h4>
        )
    }
}

const Grid = styled.div`
    display: grid;
    top: 5%;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;


export default SearchedItems;