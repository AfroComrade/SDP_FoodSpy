import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Home(){
    return(
        <><div style={{
            paddingTop: '150px',
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            
        }}>
            <h1 style = {{color:"white", fontSize: 60, fontWeight: "bold"}}>FoodSpy</h1>
            <h2 style = {{color:"black"}}>Find the lowest priced groceries guranteed</h2>    
        </div>
        <div
            style={{
                paddingTop: '100px',
                paddingBottom: '325px',
                display: 'flex',
                justifyContent: "center",
                alignItems: "center"
        }}>

                  
        <Form className="d-flex mx-sm-10 mb-2 ">
            
            <Form.Control
                    size = "lg"
                    type="search"
                    placeholder="Search for item"
                    className="me-2"
                    aria-label="Search" />
                <Button variant="dark">Search</Button>    
                
               </Form>    
             
        </div> 

        <div>

        </div></>
    );   
}

export default Home;