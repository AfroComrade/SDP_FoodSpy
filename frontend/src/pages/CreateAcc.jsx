import React from 'react';

import { Form, Button } from 'react-bootstrap';
import {UserCreate} from '../js/Authentication/userAuthentication';
import logo from "../assets/FoodspyLogo.png"
import { useState } from "react";




 function CreateAcc() {

    const [Password,SetPassword] = useState('');
    const [ConfirmPassword,SetConfirmPassword] = useState('');
    const [Email,SetEmail] = useState('');
    const [UserName,SetUserName] = useState('');

    // doSomething = function (e) {
    //     alert('it works!');
    //     e.preventDefault();
    // }

    const CreateUser = async() =>
    {
      //(EML,PWD,CFPWD,USRName)
      UserCreate(Email,Password,ConfirmPassword,UserName);
    }

    
    return(
        <> 
 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
     <script src="PasswordCheck.js"></script>     

        <div style={{
            paddingTop: '50px',
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            
        }}>
          <img src={(logo)} alt='logo'></img>
       </div>
        <div style={{
            paddingTop: '50px',
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
            
            <div>  
          <Form className="d-flex mx-sm-10 mb-2 ">
            
                    <Form.Control
                    size = "lg"
                    type="text"
                    placeholder="Enter your Name"
                    input = {UserName}
                    onChange={(e) => SetUserName(e.target.value)}
                    className="me-2"
                    aria-label="Email" />

            <Form.Control
                    size = "lg"
                    type="email"
                    placeholder="Enter your email"
                    input = {Email}
                    onChange={(e) => SetEmail(e.target.value)}
                    className="me-2"
                    aria-label="Email" />
            
            <Form.Control
            size = "lg"
            type="password"
            placeholder="Enter your Password"
            input = {Password}
            onChange={(e) => SetPassword(e.target.value)}
            className="me-2"
            aria-label="Email" />
            
            <Form.Control
            size = "lg"
            type="password"
            placeholder="Enter your Password again"
            input = {ConfirmPassword}
            onChange={(e) => SetConfirmPassword(e.target.value)}
            className="me-2"
            aria-label="Email" />

                <Button onClick={CreateUser} variant="dark">Go</Button>    
                
               </Form>   
               </div>


            </div>

           
    </>
        
    );
    }
    

    
export default CreateAcc;