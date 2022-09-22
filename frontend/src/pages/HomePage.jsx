import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SearchItems from '../components/SearchItems';
import '..//App.css';

 function Home() {
    return(
        <> 
        <div style={{
            paddingTop: '250px',
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            
        }}>
            <h1 style = {{color:"white", fontSize: 60, fontWeight: "bold"}}>FoodSpy</h1>
            <h2 style = {{color:"black"}}>Find the lowest priced groceries guaranteed</h2>    
        </div>
        <div
            style={{
                paddingTop: '50px',
                paddingBottom: '325px',
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
        }}>
            
        <SearchItems/>
             
        </div> 
        </>
        
    );
    }
    

export default Home;