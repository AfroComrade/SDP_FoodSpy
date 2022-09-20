import React from 'react';
import { Form, Button } from 'react-bootstrap';




 function CreateAcc() {

    // doSomething = function (e) {
    //     alert('it works!');
    //     e.preventDefault();
    // }
    return(
        <> 
        <div style={{
            paddingTop: '100px',
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            
        }}>
            <h2 style = {{color:"black"}}>Create a new account</h2>    
        </div>
        <div
            style={{
                paddingTop: '50px',
                paddingBottom: '325px',
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
        }}>
            
        <Form className="d-flex mx-sm-10 mb-2 ">
            
            <Form.Control
                    size = "lg"
                    type="name"
                    placeholder="First Name"
                    className="me-2"
                    aria-label="F-Name" />
                 
                
               </Form>  

                <button type="button" class="btn btn-primary" >Submit</button> 
             
        </div> 
        </>
        
    );
    }
    

export default CreateAcc;