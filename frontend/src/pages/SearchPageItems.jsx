import React, {useEffect, useState}  from "react";
import {useParams} from 'react-router-dom';
import styled from "styled-components";
import SearchItems from "../components/SearchItems";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";

function SearchedItems(){ 
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
                            <Card.Text style={{fontSize: '1.6rem', color: '#A72608', fontWeight: "bold", textAlign: "right" }}>${items.price}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                            <ListGroup.Item>{items.location}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    );

                })}
            </Grid></>
    );}
    else{
        return(
            <div style={{
                paddingTop: '300px',
                paddingBottom: '350px',
                paddingLeft: '100px',
                paddingRight: '100px',
                textAlign: "center"
                
        }}>
        <h2 style={{
                paddingBottom: '50px'
                
        }}>Item "{params.searchitems}" not found</h2>
        <Button variant="dark" size="lg" href="/" >Back to Search</Button>
        </div>
        )
    };
}



const Grid = styled.div`
    display: grid;
    top: 5%;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;


export default SearchedItems;