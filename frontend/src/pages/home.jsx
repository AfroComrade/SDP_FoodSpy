import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Home(){
    document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/616403/pexels-photo-616403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '1910px 950px';
    document.body.style.backgroundColor = '#2E7F72';
    document.body.style.backgroundPosition = 'center';
    //document.body.style.backgroundBlendMode = 'overlay';
    return(
        <> 

        <div style={{
            paddingTop: '250px',
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

        </div>
         
        </>
    );   
}

export default Home;