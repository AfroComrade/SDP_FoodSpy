import React from 'react';
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
            

            <form className="form-signin needs-validation" novalidate oninput='confirmPassword.setCustomValidity(confirmPassword.value != newPassword.value ? true : false)'>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg"
                  input = {UserName}
                  onChange={(e) => SetUserName(e.target.value)}
                  className="form-control form-control-lg" placeholder="Name" required/>
                  <label class="form-label" for="form3Example1cg">Your Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" 
                  input = {Email}
                  onChange={(e) => SetEmail(e.target.value)}
                  className="form-control form-control-lg" placeholder="Email" required />
                  <label className="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div className="form-group">
        <div className="form-group">
          
          <div className="form-outline mb-4">

            <input name="newPassword" type="password" autocomplete="off" 
             input = {Password}
             onChange={(e) => SetPassword(e.target.value)}
             className="form-control form-control-lg" id="newPassword" placeholder="New Password" aria-describedby="inputGroupPrepend" required />
            <label className="form-label" for="newPassword">New Password</label>
            <div className="invalid-feedback">
              Please enter new password.
            </div>
            
          </div>
        </div>
      </div>
      <div className="form-group">
        
        <div className="form-outline mb-4">

          <input name="confirmPassword" type="password" autocomplete="off" 
          input = {ConfirmPassword}
          onChange={(e) => SetConfirmPassword(e.target.value)}
          className="form-control form-control-lg" id="confirmPassword" placeholder="Confirm Password" aria-describedby="inputGroupPrepend" required />
          <label className="sr-only" for="confirmPassword">Confirm Password</label>
          <div className="invalid-feedback">
            Password not a match.
          </div>
        </div>
      </div>

                {/* <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" required/>
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div> */}

                <div className="d-flex justify-content-center">
                  <button id="submitBtn" onClick={CreateUser}
                    className="btn btn-dark btn-block btn-lg ">Register</button>
                    
                </div>

                {/* <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    class="fw-bold text-body"><u>Login here</u></a></p> */}

              </form>

            </div>

           
    </>
        
    );
    }
    

    
export default CreateAcc;