import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SearchItems from '../components/SearchItems';
import '..//App.css';
import { render } from '@testing-library/react';

 function Home() {
    document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/616403/pexels-photo-616403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '1910px 950px';
    document.body.style.backgroundColor = '#2E7F72';
    document.body.style.backgroundPosition = 'center';
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