import React from 'react';
import { Form, Button } from 'react-bootstrap';


 function ForgotPassword() {
    return(
        <> 
        <div style={{
            paddingTop: '250px',
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            
        }}>
            <h2 style = {{color:"black"}}>Enter your email to reset your password</h2>    
        </div>
        <div
            style={{
                paddingTop: '100px',
                paddingBottom: '325px',
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
        }}>
            
        <Form className="d-flex mx-sm-10 mb-2 ">
            
            <Form.Control
                    size = "lg"
                    type="email"
                    placeholder="Enter your email"
                    className="me-2"
                    aria-label="Email" />
                <Button variant="dark">Go</Button>    
                
               </Form>    
             
        </div> 
        </>
        
    );
    }
    

export default ForgotPassword;